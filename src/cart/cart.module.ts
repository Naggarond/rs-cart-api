import { Module } from '@nestjs/common';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services/cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Cart from './model/cart.entity';
import User from 'src/model/user.entity';
import { CartItems } from './model/cart_items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, User, CartItems]), OrderModule],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
