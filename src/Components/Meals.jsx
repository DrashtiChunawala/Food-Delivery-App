import { useState,useEffect } from 'react'
import React from 'react'
import MealItems from './MealItems'
import useHttp from '../Hooks/useHttp'
import Error from './Error'
// import Alert from '../UI/Alert'
const reqConfig={}
const Meals = () => {

    const[mealsLoaded,setMealsLoaded]=useState([])
    // const[isMessageDisplayed,setIsMessageDisplayed]=useState(false)
    
   

    // const handleDisplayMessage=()=>{
    //     setIsMessageDisplayed(true)
    //     setTimeout(()=>{
    //         setIsMessageDisplayed(false)
    //     },1000)
        

    // }

    const {data:loadedMeals,isLoading,error}=useHttp('http://localhost:3000/meals',reqConfig,[])

    // useEffect(()=>{
    //     (async ()=>{
    //         const response=await fetch("http://localhost:3000/meals")
    //         if(!response.ok) {
                
    //         }
    //         const meals = await response.json()
    //         setMealsLoaded(meals)
    //     })()
    // },[])

    if(isLoading){
        <p className='center'>Loading...</p>
    }

    if(error){
        return <Error title="Failed to fetch meals" message={error.message}/>
    }
  
    return (
       

        <ul id="meals">{loadedMeals.map((meals)=>
            <MealItems key={meals.id} meal={meals}  >{meals.name}</MealItems>
            )}</ul>
    )
}

export default Meals
