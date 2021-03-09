import { Router } from 'express';
import AnswerController from './app/controllers/AnswerController';
import NpsController from './app/controllers/NpsController';
import SendMailController from './app/controllers/SendMailController';
import SurveyController from './app/controllers/SurveyController';
import UserController from './app/controllers/UserController';

const routes = Router();

const userController = new UserController();
const surveyController = new SurveyController();

const sendMailController = new SendMailController();

const answerController = new AnswerController();

const npsController = new NpsController();

routes.post('/users', userController.create);

routes.get('/surveys', surveyController.index);
routes.post('/surveys', surveyController.create);

routes.post('/sendMail', sendMailController.execute);

routes.get('/answers/:value', answerController.execute);

routes.get('/nps/:survey_id', npsController.execute);

export { routes };
