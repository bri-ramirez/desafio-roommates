import { Router } from 'express';
import roommateRoutes from './roommate.routes.js';
import gastosRoutes from './gastos.routes.js';

const router = Router();

router.use('/roommate', roommateRoutes);
router.use('/gasto', gastosRoutes);

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

export default router;
