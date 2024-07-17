import { Router } from 'express';
import routerVersion1 from './v1';
import { appRoutes } from './routePath';

export const router: Router = Router();

router.use(appRoutes.v1, routerVersion1);
