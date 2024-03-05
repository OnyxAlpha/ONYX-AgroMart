import React, {useContext, useEffect, useState} from 'react';
import styles from './index.module.css'
import { ShopContext } from '../../../context/shop-context';
import { useLocalStorage } from 'usehooks-ts';
import { PRODUCTS } from '../../../products';
import { Cart } from '../cart';


export const CartItem = ({item}) => {
    // console.log(item)
    const {id, productName, price, weight, productImage, category} = item; 

    const {addToCart} = useContext(ShopContext)
const [itemslist, setItemsList] = useLocalStorage("Item List", []);
const [Decrement, setDecrementList] = useLocalStorage("Item List", []);


    useEffect(() => {
    setItemsList(itemslist);
  }, []);


    /* to add item to cart */
const handleAddToCart = (id) => {
    addToCart(id);
    const updatedItemsList = [...itemslist]; //copy of the itemslist
    const index = updatedItemsList.findIndex(item => item.id === id);
    if (index !== -1) {
        updatedItemsList[index].item += 1; 
    } else {
        updatedItemsList.push({ id, item: 1 }); 
    }
    setItemsList(updatedItemsList); // Update the state with the updated itemslist
  };
  


/* decreament item */
  const handleDecreament = (id) =>{
    const updatedItemsList = [...Decrement]; // Copy of the itemslist
    const res = updatedItemsList.find(item => item.id === id);
    
    if (res=== undefined) return;
    else if(res.item === 0)return 
    else {
      res.item -=1
    }
  
     const items = updatedItemsList.filter((x)=> x.item !== 0);
      // console.log({itemslist});
    setDecrementList(items); // Update the state with the updated itemslist
  }


  /* get cart items total */
const getItemQuantity = (itemId) => {
    const item = itemslist.find(item => item.id === itemId);
    // console.log(item)
    return item ? item.item : 0;
  };


  
let removeItem = (itemId) =>{
    const updatedItemsList = [...itemslist]
    const result = updatedItemsList.filter((x)=> x.id !== itemId);
    setItemsList(result);
 }



  

  return (
    <div className={styles.cartItem}>
        <img src={productImage} />
        <div className={styles.description}>
            <p>
                <b>{productName}</b>
            </p>
            <p>GH&#8373; {price} </p>
            </div>

            <div className={styles.countHandler}>
                <button onClick={() => handleDecreament(id)}> - </button>
                <p>{getItemQuantity(id)}</p>
                <button onClick={() => handleAddToCart(id)}> + </button>    
            </div>
            {/* <Cart subTotal={SubtotalAmout}/> */}
            <div className={styles.icondiv}>
            <i onClick={()=> removeItem(id)} class="fa-solid fa-xmark"></i>
            </div>
    </div>
  )
}
