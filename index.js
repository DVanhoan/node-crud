import dotenv from 'dotenv';
dotenv.config();

import connectMongoDB from './db/mongoDB.js';
import express from 'express';

import router from './route.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


app.listen(port, () => {
    connectMongoDB();
    console.log(`app listening at http://localhost:${port}`);
});
