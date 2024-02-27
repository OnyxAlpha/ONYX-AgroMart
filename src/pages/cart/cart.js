import React, { useContext } from 'react'
import styles from './index.module.css'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item/cart-item';

export const Cart = () => {
    const {cartItems} = useContext(ShopContext)

  return (
    <>
        <section className={styles.cart}>
            <div>
                <h1>Your cart items</h1>
            </div>
            <div className={styles.cartItems}>
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !==0){
                        return <CartItem data={product} />
                    }
                })}
            </div>
        </section>
    </>
  )
}
