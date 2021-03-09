import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';
import { SurveysRepository } from '../repositories/SurveysRepository';

export default class SurveyController {
  async index(req: Request, res: Response): Promise<Response> {
    const surveysRepository = getCustomRepository(SurveysRepository);

    const all = await surveysRepository.find();

    return res.status(200).json(all);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;

    const schema = yup.object().shape({
      title: yup.string().required('title is required'),
      description: yup.string().required('description is required')
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    const surveysRepository = getCustomRepository(SurveysRepository);

    const survey = surveysRepository.create({
      title,
      description
    });

    await surveysRepository.save(survey);

    return res.status(201).json(survey);
  }
}
