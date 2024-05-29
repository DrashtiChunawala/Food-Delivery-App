import React from 'react'
import { useContext } from 'react'
import Modal from '../UI/Modal'
import H2 from '../DummyComponents/H2'
import P from '../DummyComponents/P'
import Button from '../DummyComponents/Button'
import CartContext from '../cartStore/CartContext'
import {currencyFormatter} from '../util/Formatter'
import UserProgressContext from '../cartStore/UserProgressContext'
import CartItem from './CartItem'

const Cart = () => {
 const cartCtx=useContext(CartContext)

 const userProgressCtx=useContext(UserProgressContext)

 const TotalAmount=cartCtx.cartItems.reduce((totalPrice,item)=>{
   return totalPrice+item.price*item.quantity
 },0)
 const handleHideCart = () => {
  userProgressCtx.hideCart();
}

const handleShowCheckout=()=>{
  userProgressCtx.showCheckout();
}
  return (
    <Modal className='cart' open={userProgressCtx.progress==='cart'} onClose={userProgressCtx.progress==='cart'?handleHideCart:null}>
        <H2>Your Cart</H2>
        <ul>{cartCtx.cartItems.map((item)=>(
          <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onIncrease={()=>cartCtx.addToCart(item)} onDecrease={()=>cartCtx.removeFromCart(item.id)}/>
        ) )}</ul>
        <P className="cart-total">{currencyFormatter.format(TotalAmount*22.88)}</P>
        <P className="modal-actions">
          {cartCtx.cartItems.length >0 &&
          <Button onClick={handleShowCheckout} >Order Now</Button>}
        <Button textOnly onClick={handleHideCart}>Close</Button>
        </P>
    </Modal>
  )
}

export default Cart
