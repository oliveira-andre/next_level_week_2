import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
};

export default class ClassesController {
  async index(req: Request, res: Response) {
    const filters = req.query;
    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).json({
        error: 'Missing filters to search classes'
      });
    }

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedules.*')
          .from('class_schedules')
          .whereRaw('`class_schedules`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedules`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedules`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedules`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])

    return res.json(classes);
  }

  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body;

    const trx = await db.transaction();

    try {
      const insertedUsersIDs = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio
      });

      const user_id = insertedUsersIDs[0];

      const insertedClassesId = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesId[0];
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx('class_schedules').insert(classSchedule);

      await trx.commit();

      return res.status(201).send();
    } catch(err) {
      trx.rollback();
      return res.status(400).json({
        error: 'unexpected error while creating new class' 
      });
    }
  }
}
