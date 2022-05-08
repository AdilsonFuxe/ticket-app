import { Router } from 'express';
import { currentUser, requireAuth } from '../middlewares';

const router = Router();

router.get('/api/users/currentuser', currentUser, requireAuth, (req, res) => {
  return res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
