import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import Cart from './../model/cart.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private repo: Repository<Cart>,
  ) {}

  async findByUserId(user_id: string): Promise<Cart> {
    return this.repo.findOne({
      where: {
        user_id,
      },
    });
  }

  async createByUserId(user_id: string): Promise<Cart> {
    const newCart = this.repo.create({
      id: v4(v4()),
      user_id,
      items: [],
    });

    await this.repo.save(newCart);

    return newCart;
  }

  async findOrCreateByUserId(user_id: string): Promise<Cart> {
    const userCart = await this.findByUserId(user_id);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(user_id);
  }

  async updateByUserId(user_id: string, { items }: Cart): Promise<Cart> {
    const { id, ...rest } = await this.findOrCreateByUserId(user_id);

    const updatedCart = {
      id,
      ...rest,
      items: [...items],
    };

    await this.repo.save(updatedCart);

    return { ...updatedCart };
  }

  async removeByUserId(user_id): Promise<void> {
    await this.repo.delete({
      user_id,
    });
  }
}
