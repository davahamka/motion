import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { Users } from '../entity/Users';
import { DataToken } from '../interface/token';

interface RequestWithUserDataFromToken extends Request {
  userData?: Object;
}

export const checkToken = async (
  request: RequestWithUserDataFromToken,
  response: Response,
  next: NextFunction
) => {
  const { authorization: auth } = request.headers;
  if (!auth) {
    response.status(401).json({
      status: 'failed',
      msg: 'Action/Request Unauthorized',
    });
  } else {
    try {
      const userRepository = getRepository(Users);
      const token = (auth as string).split(' ')[1];
      const userToken = jwt.verify(token, process.env.JWT_SECRET) as DataToken;
      const user = await userRepository.findOne({ user_id: userToken.user_id });
      if (user) {
        request.userData = user;
        next();
      } else {
        response.status(401).json({
          status: 'failed',
          message: 'Token not valid',
        });
      }
    } catch (err) {
      response.status(400).json({
        status: 'failed',
        msg: err.message,
      });
    }
  }
};
