import { Column, Entity } from 'typeorm';

@Entity({ name: 'cart_items' })
export class CartItems {
  @Column({ type: 'uuid' })
  cart_id: string;

  @Column({ type: 'uuid' })
  product_id: string;

  @Column({ type: 'integer' })
  count: number;
}
