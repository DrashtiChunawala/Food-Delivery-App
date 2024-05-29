import React from 'react'
import P from '../DummyComponents/P'
import { currencyFormatter } from '../util/Formatter'

const CartItem = ({name,quantity,price,onIncrease,onDecrease}) => {
  return (
    <li className='cart-item'>
    <P>{name} x {quantity} = {" "}{currencyFormatter.format(price*quantity*22.88)}</P>
  <P className="cart-item-actions">
  <button onClick={onIncrease}>+</button>
  <span>{quantity}</span>
  <button onClick={onDecrease}>-</button>
  </P>
  </li>
  )
}

export default CartItem
