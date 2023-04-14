import React, { useState } from 'react';
import "./product.scss";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Slider from '../../components/slider/Slider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
<span className="price">R 1750.00</span>

const Product = () => {

  const [quantity, setQuantity] = useState(0);
  return (
    <div className='product'>
        <Navbar />

      <div className="productContainer">

          <Slider />
          
          <div className="right">
            <h1 className="title">Nike Airforce 1</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
            </p>
            
            <div className="sizes">
              <h2>Size</h2>
              <ul>
                <li>UK 10</li>
                <li>UK 8</li>
                <li>UK 6</li>
                <li>UK 4</li>
              </ul>
            </div>
            <span className="price">R 1750.00</span>
            
            <div className="actions">
              <div className="quantity">
                <RemoveIcon className='icon' onClick={(e) => setQuantity(quantity > 0 ? quantity-1 : 0)}/>
                <span>{quantity}</span>
                <AddIcon className='icon'onClick={(e) => setQuantity(quantity+1)}/>
              </div>
              <button>Add to cart</button>
            </div>

            <div className="bottom">
              <Link className='routerLink' to="/products">
                <span>
                  <ChevronLeftIcon className='leftIcon' />
                  Continue shopping
                </span>
              </Link>

              <Link className='routerLink' to="/cart">
                <span>
                  Proceed to cart
                  <ChevronRightIcon className='rightIcon'/>
                </span>
              </Link>
            </div>
            
          </div>
      </div>

      <Footer />
    </div>
  )
}

export default Product