import CartEntity from 'src/cart/model/cart.entity';
import { CartItems } from 'src/cart/model/cart_items.entity';

/**
 * @param {Cart} cart
 * @returns {number}
 */
export function calculateCartTotal(cart: CartEntity): number {
  return cart
    ? cart.items.reduce((acc: number, { count }: CartItems) => {
        const price = 40; // hardcored for now
        return (acc += price * count);
      }, 0)
    : 0;
}
