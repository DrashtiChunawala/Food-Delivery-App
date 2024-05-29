import React from 'react'
import { useContext } from 'react'
import P from '../DummyComponents/P'
import H2 from '../DummyComponents/H2'
import Button from '../DummyComponents/Button'
import Modal from '../UI/Modal'
import CartContext from '../cartStore/CartContext'
import {currencyFormatter} from '../util/Formatter'
import Input from '../UI/Input'
import UserProgressContext from '../cartStore/UserProgressContext'
import useHttp from '../Hooks/useHttp'
import Error from './Error'

const requestConfig={
  method:'POST',
  headers: {
    'Content-Type':'application/json'
  },body:{

  }
}

const CheckOut = () => {

    const cartCtx = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);
    
   const{data,isLoading:isSEnding,error,sendRequest,clearData}= useHttp('http://localhost:3000/orders',requestConfig)
    
    const TotalAmount=cartCtx.cartItems.reduce((totalPrice,item)=>{
        return totalPrice+item.price*item.quantity
      },0)

      const handleClose=()=>{
        userProgressContext.hideCheckout();
      }
      const handleFinish=()=>{
        userProgressContext.hideCheckout();
        cartCtx.clearCart();
        clearData();
      }

      const handleSubmit=(event)=>{
        event.preventDefault();

        const fd=new FormData(event.target);
        const customerData=Object.fromEntries(fd.entries());

        sendRequest(JSON.stringify({
          order: {
              items: cartCtx.cartItems,
              customer: customerData
          }
      }))

      }

      let actions=(
        <>
        <Button textOnly type="button" onClick={handleFinish}>Close</Button>
        <Button >CheckOut</Button>
        </>
      )

      if(isSEnding){ 
        actions=<span>Sending order Data...</span>}

      if(data && !error){
        return <Modal open={userProgressContext.progress==='checkout'} onClose={handleFinish}>
          <H2>Success!!</H2>
          <P>Your order was submitted successfully!!</P>
        <P>We will get back to you with more details via email within the next few minutes</P>
        <P className='modal-actions'>
          <Button onClick={handleFinish}>OKAY</Button>
        </P>
        </Modal>
      }

  return (
  <Modal open={userProgressContext.progress==='checkout'} onClose={handleClose}>
    <form onSubmit={handleSubmit}>
        <H2>Checkout</H2>
        <P>Total Amount: {currencyFormatter.format(TotalAmount*22.88)}</P>

        <Input type="text" label="name" id="name" />
        <Input type="email" label="E-mail Address" id="email" />
        <Input type="text" label="Street" id="street" />
        <div className='control-row'>
        <Input type="text" label="Postal Code" id="postal-code" />
        <Input type="text" label="City" id="city" />
    </div>

    {error && <Error title="Failed to submit order" message={error}/>}
    <P className="modal-actions">
      {actions}  </P>
    </form>
  </Modal>
  )
}

export default CheckOut
