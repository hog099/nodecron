import dotenv from 'dotenv';
import 'reflect-metadata';
import app from './app';

// import './database/index';
import  './cron/index';

dotenv.config();

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🏃 Server Running at http://localhost:${port}`);
});