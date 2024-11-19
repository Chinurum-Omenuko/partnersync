import { Router } from '@sveltejs/kit';
import * as handlers from './handlers';

export const router = Router();

router.post('/register', handlers.registerUser);
router.put('/:id', handlers.updateUser);
router.delete('/:id', handlers.deleteUser);
router.get('/me', handlers.getCurrentUser);
