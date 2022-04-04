import { Router } from 'express';

const router = Router();

router.post('/api/users/signup', (req, res) => {
  res.send('Hi there!');
});

export { router as signupRouter };
