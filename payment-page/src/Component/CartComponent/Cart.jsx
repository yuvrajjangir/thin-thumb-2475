import React, { useState } from 'react';
import './Cart.css'; // Import your CSS file
import AddressPage from '../PaymentComponent/AddressPage';

function Cart({data}) {
  const [cartItems, setCartItems] = useState(data)
  const [state, setState] = useState(false)


  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };


const handleCheckout=()=>{
  setState(true)
}




  return (
    <>
    {state?<AddressPage/>:
    <div>
      <header>
        <h1>Your Shopping Cart</h1>
      </header>
      <main>
        <section className="cart-items">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={`Loading.....`} />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ₹{item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        {/* Rest of your code */}
        <section className="cart-summary">
          <h2>Cart Summary</h2>
          <div className="summary-details">
            <p>Total Items: {cartItems.length}</p>
            <p>
              Subtotal: ₹{' '}
              {(
                cartItems.reduce((total, item) => total + item.price * item.quantity, 0) || 0
              ).toFixed(2)}
            </p>
            <p>Shipping: ₹5.00</p>
            <p>
              Total: ₹{' '}
              {(
                cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 5.0
              ).toFixed(2)}
            </p>
          </div>
          <button className="checkout-button"  onClick={handleCheckout}>Proceed to Checkout</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Online Coffee Shop</p>
        {/* <AddressPage/> */}
      </footer>     
    </div>
    }
    </>
  );
}

export default Cart;
