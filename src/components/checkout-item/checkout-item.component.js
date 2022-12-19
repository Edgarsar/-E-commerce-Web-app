import { useContext } from 'react';

import { CartContext } from '../contexts/cart.context';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Arrow,
  Quantity,
  Value,
  RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {

  const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const cleaItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeCartHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeCartHandler}>
          &#10094;
        </Arrow>
        <Value>
          {quantity}
        </Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={cleaItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;