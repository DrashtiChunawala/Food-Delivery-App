import React, { useContext, useState, useEffect } from 'react';
import icon from '../assets/logo.jpg';
import H1 from '../DummyComponents/H1';
import Button from '../DummyComponents/Button';
import Img from '../DummyComponents/Img';
import CartContext from '../cartStore/CartContext';
import UserProgressContext from '../cartStore/UserProgressContext';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalItems = cartCtx.cartItems.reduce((totalItems, item) => {
      return totalItems + item.quantity;
    }, 0);
    

  

  const handleShowCart = () => {
    userProgressCtx.showCart();
    
  }
  

  return (
    <>
    <header id="main-header">
      <div id="title">

        <Img src={icon} alt="restaurant icon" />
        <H1>Foodiezz</H1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          CART ({totalItems})
        </Button>
      </nav>
    </header>
    </>
  );
};

export default Header;

/*import React, { useState, useRef } from 'react';

const Example = () => {
  const [submittedValue, setSubmittedValue] = useState('');
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = formRef.current.value;
    setSubmittedValue(formValue);  
*/