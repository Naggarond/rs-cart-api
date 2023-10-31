/* eslint-disable @typescript-eslint/ban-types */
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Status } from '../cart/model/enums';

@Entity({ name: 'orders' })
export class Orders {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @Column({ type: 'uuid' })
  cart_id: string;

  @Column({ type: 'json' })
  payment: Object;

  @Column({ type: 'json' })
  delivery: Object;

  @Column({ type: 'text' })
  comments: string;

  @Column({ type: 'enum' })
  status: Status;

  @Column({ type: 'integer' })
  total: number;
}
