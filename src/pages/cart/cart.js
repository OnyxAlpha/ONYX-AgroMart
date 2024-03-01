import React, { useContext, useEffect, useState } from 'react'
import styles from './index.module.css'
import { PRODUCTS } from '../../products'
import Navbar from "../navbar";
import { CartItem } from './cart-item/cart-item';
import { useLocalStorage } from 'usehooks-ts';
import { FooterSection } from '../landing/footer-section';
import { Link } from 'react-router-dom';

function Cart () {
  // console.log(subtotal)
    // const {cartItems, getTotalAmout} = useContext(ShopContext)
    // const totalPrice = getTotalAmout();

    // const { cartItems } = useContext(ShopContext);
    const [itemslist, setItemsList] = useLocalStorage("Item List", []);
    const [SubtotalAmout, setSubtotalAmout] = useState(0)

    useEffect(() => {

  totalAmount();
  // getCartItems();
    }, [itemslist]); // Run only once after component mounted




    const availableItems = itemslist.filter(item => item.item > 0);
    // console.log({availableItems})



    // Match available items with PRODUCTS data to get the final results
    const finalResults = availableItems.map(item => ({
        ...PRODUCTS.find(product => product.id === item.id),
        quantity: item.quantity
    }));
    // console.log({finalResults})




    let totalAmount = () =>{
      if(itemslist.length !== 0){
          let amount = itemslist.map((x) =>{
              let {item, id} = x;
              let result = PRODUCTS.find((y)=> y.id === id) || [];
              return item * result.price;
          }).reduce((x,y)=>x+y,0);
          setSubtotalAmout(amount);
      } else return setSubtotalAmout(0);
  }
  

/* to clear cart */
  let clearCart = () => {
    setItemsList([])
    setSubtotalAmout(0)
  }

    

  return (
    <>
      <Navbar />

      <div class="container text-center mt-5">
  <div class="row">
    <div class="col-8 ">
    <div>
                <h1>Your cart items</h1>
            </div>
            <div className={styles.cartItems}>
            {finalResults.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            </div>

    </div>
    <div class="col-4">
    <div className={styles.checkout}>
              <p>SubTotal GH&#8373; {SubtotalAmout}</p>
              <button> <Link className={styles.link} to='/products'> Continue Shopping</Link> </button>
              <button > <Link  className={styles.link} to='/billing'> Check Out</Link> </button>
              <button onClick={()=> clearCart()} className={styles.clearCart}> Clear Cart </button>
            </div>
    </div>
  </div>
</div>
        <FooterSection />
    </>
  )
}

export default Cart;
