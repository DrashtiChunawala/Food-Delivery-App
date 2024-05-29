import React from 'react'
import { useContext,useState,useEffect } from 'react'
import H3 from '../DummyComponents/H3'
import P from '../DummyComponents/P'
import Img from '../DummyComponents/Img'
import Button from '../DummyComponents/Button'
import {currencyFormatter} from '../util/Formatter'
import CartContext from '../cartStore/CartContext'



const MealItems = ({meal}) => {
  const cartCtx=useContext(CartContext)

  const handleAddToCart=()=>{
    
    // handleDisplayMessage();
    cartCtx.addToCart(meal)
    console.log("clicked")
  }

  return (
   <li className='meal-item'>
    <article>
      
        <Img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
        <H3>{meal.name}</H3>
        <P className='meal-item-price'>{currencyFormatter.format(meal.price*22.88)}</P>
        <P className='meal-item-description'>{meal.description}</P>
        </div>
        <P className='meal-item-actions'>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
        </P>
    </article>

   </li>
  )
}

export default MealItems
