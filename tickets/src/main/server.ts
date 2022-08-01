import 'module-alias/register';
import app from './config/app';
import env from './config/env';

const start = async (): Promise<void> => {
  try {
    app.listen(env.port, () => {
      console.log(`Server listening on port ${env.port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
