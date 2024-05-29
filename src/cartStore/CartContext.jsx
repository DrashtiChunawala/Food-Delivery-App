import { createContext,useReducer } from "react";

const CartContext = createContext({
    cartItems: [],
    addToCart: (item) => {},
    removeFromCart: (itemId) => {},
    clearCart:()=>{}
});

//reducer function
const cartReducer=(state,action)=>{
    if(action.type === "ADD_TO_CART"){
        const updatedItems=[...state.cartItems]
        const existingItemIndex=updatedItems.findIndex((item)=>{  
            return item.id===action.cartItem.id
        })
        if(existingItemIndex>-1){
            const existingItem=updatedItems[existingItemIndex] 
            const updateExistingItem={
                ...existingItem,
                quantity:existingItem.quantity+1   
            }
            updatedItems[existingItemIndex]=updateExistingItem

        }else{
            updatedItems.push({...action.cartItem,quantity:1})
        }
        return {
            ...state,
            cartItems:updatedItems
        }

    }
    if(action.type === "REMOVE_FROM_CART"){
        const updatedItems=[...state.cartItems]

        const existingItemIndex=updatedItems.findIndex((item)=>{  
            return item.id===action.payload.itemId
        })

        const itemToBeRemoved=updatedItems[existingItemIndex]
        if(itemToBeRemoved.quantity===1){
            updatedItems.splice(existingItemIndex,1)
        }else{
            const updateExistingItem={
                ...itemToBeRemoved,
                quantity:itemToBeRemoved.quantity-1
            }
            updatedItems[existingItemIndex]=updateExistingItem
        }
        return{
            ...state,
             cartItems:updatedItems
        }

        
    }

    if(action.type === 'CLEAR_CART'){
        return({...state,cartItems:[]});
    }
    return state
}

export const CartContextProvider=({children})=>{
    
    const[state,dispatch]=useReducer(cartReducer,{cartItems:[]})

    const addToCart=(item)=>{
        dispatch({type:"ADD_TO_CART",cartItem:item})
    }
    const removeFromCart=(itemId)=>{
        dispatch({type:"REMOVE_FROM_CART",payload:{itemId:itemId}})


    }

    function clearCart(){
        dispatch({type:"CLEAR_CART"})
    }

    const cartContent={
        cartItems: state.cartItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart
    }
    console.log( cartContent);

     return <CartContext.Provider value={cartContent}>{children}</CartContext.Provider>
}



export default CartContext;