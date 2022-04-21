import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(cors({ origin: '*' }));

/*const db = mysql.createConnection({
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
*/
app.get('/hello', (req, res) => {
  //res.set({ 'Access-Control-Allow-Origin': '*' });
  res.json({ hello: 'hello' });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
