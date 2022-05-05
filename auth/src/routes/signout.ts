import { Router } from 'express';

const router = Router();

router.post('/api/users/signout', (req, res) => {
  req.session = null;
  return res.json({ message: 'You have been signed out' });
});

export { router as signoutRouter };
