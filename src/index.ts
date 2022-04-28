import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(cors({ origin: '*' }));

const db = mysql.createConnection({
  host: typeof process.env.RDB_ENDPOINT == 'string' ? process.env.RDB_ENDPOINT : '', //mysql
  user: typeof process.env.RDB_USER == 'string' ? process.env.RDB_USER : '',
  password: typeof process.env.RDB_PASSWORD == 'string' ? process.env.RDB_PASSWORD : '',
  database: typeof process.env.RDB_DB_NAME == 'string' ? process.env.RDB_DB_NAME : '',
  port: typeof process.env.RDB_PORT == 'string' ? Number(process.env.RDB_PORT) : 0,
  multipleStatements: true, //複数クエリ発行できる
});

app.get('/', (req, res) => {
  //res.set({ 'Access-Control-Allow-Origin': '*' });
  db.connect((err) => {
    if (err) throw err;
    db.query('select * from test LIMIT 1', (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json({ msg: '成功！', result: result });
    });
  });
});

app.get('/hello', (req, res) => {
  //res.set({ 'Access-Control-Allow-Origin': '*' });
  res.json({ hello: 'hello' });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

//create table test(id int, name varchar(10));
//
