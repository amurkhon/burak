import express from 'express';
import path from 'path';
import  router from './router';
import routerAdmin from './router-admin';
import morgan from 'morgan';
import { MORGAN_FORMAT } from './libs/config';

/* ENTRANCE */

const app = express();
console.log(__dirname);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/* SESSIONS */

/* VIEWS */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/* ROUTERS */

app.use('/admin', routerAdmin); // EJS
app.use('/', router);  //REACT

export default app;