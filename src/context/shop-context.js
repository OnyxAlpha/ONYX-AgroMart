import React, {createContext, useState} from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}
 

export const ShopContextProvider = (props) => {

    let itemslist = JSON.parse(localStorage.getItem("Item List")) || [];
// const [itemslists, setItemsList] = useLocalStorage("Item List", []);
    // const [itemList, setList] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());


    /* Function for getting the total products amount in cart */
    const getTotalAmout =()=>{
        // let totalPrice = 0;
        // for (const item in cartItems){
        //     if(cartItems[item] > 0){
        //         let itemData = PRODUCTS.find((product) =>product.id === Number(item));
        //         totalPrice += cartItems[item] * itemData.price
        //     }
        //     return totalPrice;
        // }
        return null
    }


/* function for adding products to cart */
const addToCart = (itemId) => {
    let selectedItem = itemId;
    let result = itemslist.find((x) => x.id === selectedItem);

    if (result === undefined) {
        itemslist.push({
            id: selectedItem,
            item: 1
        });
    } else {
        // If item exists, increment its quantity by 1
        result.item += 1;
    }
    
    // Update localStorage
    // localStorage.setItem("Item List", JSON.stringify(itemslist));
}


/* item count --decrement-- function */
let decrement = (itemId) =>{
    let selectedItem = itemId;
    let result = itemslist.find((x)=> x.id === selectedItem);
  
    if(result === undefined) return;
    else if(result.item === 0)return
    else{
        result.item -= 1;
    };

  };

  

/* function to remove product from cart */
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
/* function to update products added to cart or deleted from cart */
   const updateCartItemCount = (newAmount, itemId) =>{
        // setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = { cartItems, addToCart, removeFromCart,  updateCartItemCount, getTotalAmout }

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
