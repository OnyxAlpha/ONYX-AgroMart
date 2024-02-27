import React, {useContext} from 'react';
import styles from './index.module.css'
import { ShopContext } from '../../../context/shop-context';

export const CartItem = (props) => {
    const {cartItems,addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)

 const {id, productName, price, productImage } = props.data;
  return (
    <div className={styles.cartItem}>
        <img src={productImage}/>
        <div className={styles.description}>
            <p>
                <b>{productName}</b>
            </p>
            <p>GH&#8373; {price} </p>

            <div className={styles.countHandler}>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>    
            </div>
        </div>
    </div>
  )
}
