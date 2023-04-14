import React, { useState } from 'react';
import "./cart.scss";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LockIcon from '@mui/icons-material/Lock';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { cartData } from '../../productData';

const Cart = () => {

  const [shipingDetails, setShipingDetails] = useState(false)
  return (
    <div className='cart'>
        <Navbar />
        <div className="header">
          <span>Your Shopping Cart</span>
        </div>
        <div className="cartContainer">
          

          <div className="left">
            {cartData.map((item) => (
              <div className="cartItem">
                <div className="imgContainer">
                  <img src={item.img} alt="" />
                </div>
                <div className="details">
                  <span className="title">{item.title}</span>
                  <div className="quantity">
                    <span className="qtt">Quantity</span>
                    <div className="actions">
                      <RemoveIcon className='icon'/>
                      <span>{item.quantity}</span>
                      <AddIcon className='icon'/>
                    </div>
                   
                  </div>
                  <div className="bottom">
                    <span>
                      <DeleteIcon className='icon'/>
                      Remove
                    </span>
                    <span>
                      <FavoriteIcon className='icon'/>
                      Move to wishlist
                    </span>
                  </div>
                </div>

                <div className="subtotal">
                  <span className="count">Items : 3</span>
                  <span className="price">R 3654.00</span>
                </div>
              </div>
            ) )}
          </div>

          <div className="right">
              <div className="top">
                <div className="summary">
                  <span className="heading">Cart Summary</span>

                  <div className="info">
                    <span className="key">TOTAL: <span>(2 items)</span></span>
                    <span className="price">R 6584.00</span>
                  </div>

                  <button onClick={(e) => setShipingDetails(true)}>Proceed to checkout</button>
                </div>

                <div className="extra">
                  <span>
                    <LockIcon className='icon'/>
                    Secure Checkout
                  </span>
                  <span>
                    <CreditCardIcon className='icon'/>
                    Many ways to pay
                  </span>
                  <span>
                    <LocalShippingIcon className='icon'/>
                    Fast Reliable delivery
                  </span>
                </div>
              </div>

              {shipingDetails && (
                <div className="bottom">
                  <span className="heading">Shipping Information</span>
                  <form action="">
                      <span>Address</span>
                    <div className="group">
                      <div className="input-group">
                        <label htmlFor="">Street address</label>
                        <input type="text" placeholder='25 Luis Street'/>
                      </div>
                      <div className="input-group">
                        <label htmlFor="">city</label>
                        <input type="text" placeholder='Johannesburg'/>
                      </div>
                      <div className="input-group">
                        <label htmlFor="">State</label>
                        <input type="text" placeholder='Gauteng'/>
                      </div>
                      <div className="input-group">
                        <label htmlFor="">Zip code</label>
                        <input type="text" placeholder='1800'/>
                      </div>
                    </div>
                      <span>Contact Information</span>
                    <div className="group">
                      <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='james@gmail.com'/>
                      </div>
                      <div className="input-group">
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder='072 354 9968'/>
                      </div>
                      
                    </div>
                    <button>Checkout</button>
                  </form>
                </div>
              )}
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart