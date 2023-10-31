import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from './enums';
import { CartItems } from './cart_items.entity';

@Entity()
class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  created_at: Date;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  updated_at: Date;

  @Column({ type: 'enum' })
  status: Status;

  @OneToMany(
    () => CartItems,
    item => item.cart_id,
  )
  items: CartItems[];
}
export default Cart;
