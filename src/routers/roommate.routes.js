import { Router } from 'express';
import {
  create,
  getAll,
} from '../controllers/roommate.controller.js';

const router = Router();

router.get('/', getAll);
router.post('/', create);

export default router;
