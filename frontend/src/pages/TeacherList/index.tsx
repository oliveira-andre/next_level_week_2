import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input id="subject" type="text" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input id="week_day" type="text" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input id="time" type="text" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/30729516?s=460&u=61d4c46a6bed8656ec31eb6dc147fe6b21e2212e&v=4" alt="Andre Oliveira" />
            <div>
              <strong>Andre Oliveira</strong>
              <span>Quimica</span>
            </div>
          </header>

          <p>
            Maluco dos códigos
            <br /><br />
            etc etc etc
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="entrar em contato" />
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
