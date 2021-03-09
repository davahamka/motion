import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { format, parseISO } from 'date-fns';
import { MessageOut } from '../entity/MessageOut';

export class MessageOutController {
  private messageOutRepository = getRepository(MessageOut);

  async all() {
    return this.messageOutRepository.find();
  }

  async one(request: Request) {
    return this.messageOutRepository.findOne({ message_id: request.params.id });
  }

  async create(request: Request) {
    await this.messageOutRepository.save(request.body);

    return {
      status: 'success',
      msg: 'message generated successfully',
    };
  }

  async remove(request: Request, response: Response) {
    const messageToRemove = await this.messageOutRepository.findOne({
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
    const messageToUpdate = await this.messageOutRepository.findOne({
      message_id: request.params.id,
    });

    if (!messageToUpdate) {
      response.status(400);
      return {
        status: 'failed',
        msg: 'Message not found',
      };
    }

    await this.messageOutRepository.save({
      message_id: request.params.id,
      ...request.body,
    });
  }

  async groupByAgency(request: Request) {
    const { agency_id } = request.body;
    return this.messageOutRepository.find({ agency_id });
  }

  async groupByDate(request: Request) {
    let { start_date, end_date } = request.body;

    if (!start_date || !end_date) {
      start_date = end_date = new Date();
    } else {
      start_date = parseISO(start_date);
      end_date = parseISO(end_date);
    }

    const data = await this.messageOutRepository
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

    const total_data = await this.messageOutRepository
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
