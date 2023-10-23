import bodyParser from 'body-parser';
import express from 'express';
import 'dotenv/config';

import cors from 'cors';

import passport from './config/passport';

import AppRouter from './routes';
import connectDB from './config/database';
import { errorHandler } from './middlewares';

const app = express();
app.use(cors());
app.use(passport.initialize());

const router = new AppRouter(app);

// Connect to MongoDB
connectDB();

// Express configuration
app.set('port', process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

// error handlers
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});
app.use(errorHandler);

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
