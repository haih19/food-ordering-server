import { router } from '@/routes';
import { appRoutes } from '@/routes/routePath';
import cors from 'cors';
import express, { Application } from 'express';

export const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(appRoutes.api, router);

app.use('/', async (req, res) => {
  res.json({ message: 'hell world', status: 200 });
});
