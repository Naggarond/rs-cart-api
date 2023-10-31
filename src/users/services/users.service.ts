import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import User from 'src/model/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async findOne(user_id: string): Promise<User> {
    return this.repo.findOne({
      where: {
        id: user_id,
      },
    });
  }

  async createOne({ name, password }: User): Promise<User> {
    const id = v4(v4());
    const newUser = { id: id, name, password };

    await this.repo.save(newUser);

    return newUser;
  }
}
