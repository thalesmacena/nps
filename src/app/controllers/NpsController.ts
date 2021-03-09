import { Request, Response } from 'express';
import { getCustomRepository, IsNull, Not } from 'typeorm';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

export default class NpsController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { survey_id } = req.params;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveysUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull())
    });

    const detractors = surveysUsers.filter((survey) => {
      return survey.value >= 0 && survey.value <= 6;
    }).length;

    const promoters = surveysUsers.filter((survey) => {
      return survey.value >= 9 && survey.value <= 10;
    }).length;

    const passives = surveysUsers.filter((survey) => {
      return survey.value >= 7 && survey.value <= 8;
    }).length;

    const totalAnswers = surveysUsers.length;

    const score = Number(
      (((promoters - detractors) / totalAnswers) * 100).toFixed(2)
    );

    return res.status(200).json({
      nps: score,
      totalAnswers,
      promoters,
      passives,
      detractors
    });
  }
}
