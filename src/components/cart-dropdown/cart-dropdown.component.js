
import React from 'react';
import CartItem from '../cart-item/cart-item.component';

import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown-container'>
    <div className='cart-items' />
    {[].map(item => <CartItem cartItem={item} />)}
    <Button>Check out</Button>
  </div>
);

export default CartDropdown;