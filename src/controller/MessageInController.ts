import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { MessageIn } from '../entity/MessageIn';
import { format, parseISO } from 'date-fns';

export class MessageInController {
  private messageInRepository = getRepository(MessageIn);

  async all() {
    return {
      status: 'success',
      data: await this.messageInRepository.find(),
    };
  }

  async one(request: Request) {
    return this.messageInRepository.findOne(request.params.id);
  }

  async create(request: Request) {
    await this.messageInRepository.save(request.body);

    return {
      status: 'success',
      msg: 'message generated successfully',
    };
  }

  async remove(request: Request, response: Response) {
    const messageToRemove = await this.messageInRepository.findOne({
      message_id: request.params.id,
    });
    if (!messageToRemove) {
      response.status(400);
      return {
        status: 'failed',
        msg: 'Message not found',
      };
    }
  }

  async update(request: Request, response: Response) {
    const messageToUpdate = await this.messageInRepository.findOne({
      message_id: request.params.id,
    });

    if (!messageToUpdate) {
      response.status(400);
      return {
        status: 'failed',
        msg: 'Message not found',
      };
    }

    await this.messageInRepository.save({
      message_id: request.params.id,
      ...request.body,
    });
  }

  async groupByAgency(request: Request) {
    const { agency_id } = request.body;
    return this.messageInRepository.find({ agency_id });
  }

  async groupByDate(request: Request) {
    let { start_date, end_date } = request.body;

    if (!start_date || !end_date) {
      start_date = end_date = new Date();
    } else {
      start_date = parseISO(start_date);
      end_date = parseISO(end_date);
    }

    const data = await this.messageInRepository
      .createQueryBuilder('message_in')
      .andWhere(
        'message_in.message_date >= :start_date AND message_in.message_date <= :end_date',
        {
          start_date: format(start_date, 'yyyy-LL-dd 00:00:00'),
          end_date: format(end_date, 'yyyy-LL-dd 23:59:59'),
        }
      )
      .getMany();

    return {
      status: 'success',
      data,
    };
  }

  async countByDate(request: Request) {
    let { start_date, end_date } = request.body;

    if (!start_date || !end_date) {
      start_date = end_date = new Date();
    } else {
      start_date = parseISO(start_date);
      end_date = parseISO(end_date);
    }

    const total_data = await this.messageInRepository
      .createQueryBuilder('message_in')
      .andWhere(
        'message_in.message_date >= :start_date AND message_in.message_date <= :end_date',
        {
          start_date: format(start_date, 'yyyy-LL-dd 00:00:00'),
          end_date: format(end_date, 'yyyy-LL-dd 23:59:59'),
        }
      )
      .getCount();

    return {
      status: 'success',
      total_data,
    };
  }
}
