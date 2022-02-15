import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
const PORT = process.env.PORT;
const app = express();
app.use(cors({ origin: '*' }));

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'password',
  database: 'initialdb',
  multipleStatements: true, //複数クエリ発行できる
});

app.get('/', (req, res) => {
  //res.set({ 'Access-Control-Allow-Origin': '*' });
  db.connect((err) => {
    if (err) throw err;
    db.query('select * from test', (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
