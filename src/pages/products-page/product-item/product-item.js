import React, { useContext } from 'react'
import styles from '../product-item/index.module.css'
import { ShopContext } from '../../../context/shop-context';

export const ProductItem = (props, index) => {
 const {addToCart, cartItems} = useContext(ShopContext)
 const {id, productName, price, productImage } = props.data;
 const cartItemAmount = cartItems[id];

  return (
    <div key={index} className={styles.product}>
        <img src={productImage}/>
        <div className={styles.description}>
            <p><b>{productName}</b></p>
            <p>GH&#8373;:{price}</p>
        </div>
        <button className={styles.addToCartBttn} onClick={() => addToCart(id)}>
            Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
    </div>
  )
}
