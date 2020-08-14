import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  const users = [
    { name: 'Andre', idade: 20 },
    { name: 'Karine', idade: 19 }
  ];

  return res.json(users);
});

app.listen(3333);
