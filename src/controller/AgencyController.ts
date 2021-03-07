import 'dotenv/config';
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Agency } from '../entity/Agency';

export class AgencyController {
  private agencyRepository = getRepository(Agency);

  async all() {
    return this.agencyRepository.find();
  }

  async create(request: Request, response: Response) {
    const { agency_name } = request.body;
    if (agency_name === '' || agency_name === undefined) {
      response.status(400);
      return {
        status: 'failed',
        msg: 'Agency not valid',
      };
    }

    if (await this.agencyRepository.findOne({ agency_name })) {
      response.status(400);
      return {
        status: 'failed',
        msg: 'Agency already registered',
      };
    }

    this.agencyRepository.save(request.body);
    return {
      status: 'success',
      msg: `${agency_name} created`,
    };
  }

  async update(request: Request) {
    await this.agencyRepository.save({
      agency_id: request.params.id,
      ...request.body,
    });
  }

  async remove(request: Request, response: Response) {
    const agencyToRemove = await this.agencyRepository.findOne({
      agency_id: request.params.id,
    });

    if (!agencyToRemove) {
      response.status(400);
      return {
        status: 'failed',
        msg: 'Agency not found',
      };
    } else {
      await this.agencyRepository.remove(agencyToRemove);
    }

    return {
      status: 'success',
      msg: 'Agency removed',
    };
  }
}
