import React, { useContext, useEffect, useState } from 'react'
import styles from '../product-item/index.module.css'
import { ShopContext } from '../../../context/shop-context';
import { useLocalStorage } from "usehooks-ts";


export const ProductItem = (prop, index) => {
 const {addToCart, decrement} = useContext(ShopContext)
 const {id, productName, price, productImage } = prop.data;
//  console.log(data)
//  const cartItemAmount = cartItems[id];
const [itemslist, setItemsList] = useLocalStorage("Item List", []);
const [Decrement, setDecrementList] = useLocalStorage("Item List", []);
// const [getItemId, setItemCount] = useState();

useEffect(() => {
  // getptoductsTotal();
  // Update itemslist from localStorage
  setDecrementList(Decrement)
  setItemsList(itemslist);
}, []);



const handleAddToCart = (id) => {
  addToCart(id);
  // setItemCount(id)
  const updatedItemsList = [...itemslist]; //copy of the itemslist
  const index = updatedItemsList.findIndex(item => item.id === id);
  if (index !== -1) {
      updatedItemsList[index].item += 1; 
  } else {
      updatedItemsList.push({ id, item: 1 }); 
  }
  setItemsList(updatedItemsList); // Update the state with the updated itemslist
};



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




const getItemQuantity = (itemId) => {
  const item = itemslist.find(item => item.id === itemId);
  // console.log(item)
  return item ? item.item : 0;
};




  return (
    <div>
      <div key={index} className={styles.product}>
        <img src={productImage}/>
        <div className={styles.description}>
            <p><b>{productName}</b></p>
            <p>GH&#8373;:{price}</p>
        </div>
       <div className={styles.product_buttons}>
       <i  onClick={() => handleAddToCart(id)} class="fa-solid fa-plus"></i>
       <button className={styles.addToCartBttn} onClick={() => handleAddToCart(id)}>
            Add to Cart {getItemQuantity(id)}</button>
           <div>
           <i onClick={() => handleDecreament(id)} class="fa-solid fa-minus"></i>
           </div>
       </div>
    </div>
    </div>
  )
}
