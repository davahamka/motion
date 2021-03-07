import 'dotenv/config';
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Users } from '../entity/Users';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { DataToken } from '../interface/token';

export class UsersController {
  private userRepository = getRepository(Users);

  async all() {
    return this.userRepository.find();
  }

  async one(request: Request) {
    return this.userRepository.findOne(request.params.id);
  }

  async register(request: Request, response: Response) {
    const { username, password } = request.body;
    if (await this.userRepository.findOne({ username })) {
      response
        .status(400)
        .send({ status: 'failed', msg: 'Username already registered' });
    }

    const passwordHashed = await bcrypt.hash(password, 8);

    this.userRepository.save({
      ...request.body,
      image_url: 'not implemented yet',
      password: passwordHashed,
    });

    response.status(200).send({
      status: 'success',
      msg: 'Registration success',
    });
  }

  async login(request: Request, response: Response) {
    const { username, password } = request.body;
    const userInfo = await this.userRepository.findOne({ username });
    let accessToken = '';
    if (userInfo === undefined) {
      response.status(400).send({
        status: 'fail',
        msg: 'username not found',
      });
    } else {
      const isPasswordSame = await bcrypt.compare(password, userInfo.password);
      if (!isPasswordSame) {
        response.status(400);
        return {
          status: 'fail',
          msg: 'password is not valid',
        };
      }
    }

    this.userRepository.save({
      user_id: userInfo.user_id,
      last_login:
        new Date().toLocaleDateString() +
        ' | ' +
        new Date().toLocaleTimeString(),
    });

    const dataToken: DataToken = {
      user_id: userInfo.user_id,
      username: userInfo.username,
      img_url: userInfo.image_url,
      password: userInfo.password,
    };

    accessToken = jwt.sign(dataToken, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return {
      status: 'success',
      msg: 'login success',
      data: {
        accessToken: `Bearer ${accessToken}`,
      },
    };
  }

  async remove(request: Request) {
    let userToRemove = await this.userRepository.findOne(request.params.id);
    await this.userRepository.remove(userToRemove);
  }
}
