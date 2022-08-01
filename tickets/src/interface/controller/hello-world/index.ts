import { ok } from '@src/interface/helpers/http-helper';
import tryCatch from '@src/interface/helpers/try-cache';
import { BuildHelloWordController } from './protocols';

const buildHelloWordController: BuildHelloWordController = () => async (httRequest) => ok({ message: 'Hello World' });
export const helloWordController = tryCatch(buildHelloWordController);