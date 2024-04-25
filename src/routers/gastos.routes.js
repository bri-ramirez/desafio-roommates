import { Router } from 'express';
import {
  create,
  getAll,
  remove,
  update,
} from '../controllers/gastos.controller.js';

const router = Router();

router.get('/', getAll);
router.post('/', create);
router.delete('/', remove)
router.put('/', update)



export default router;
