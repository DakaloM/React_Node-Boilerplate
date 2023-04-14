import React, { useState } from 'react';
import "./products.scss";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Slider from '../../components/slider/Slider';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { colors, latestProducts } from '../../productData';
import { Link } from 'react-router-dom';

const Products = () => {

  const [option, setOption] = useState("");

  
  return (
    <div className='products'>
        <Navbar />

        <div className="header">
            <span>Dont miss out on our Discounts Specials!</span>
            <button>View Specials</button>
          </div>
        <div className="productsContainer">

          
          
          <div className="left">
              <span className="header">Filter Products</span>
              <span >Categories</span>
              <ul className="categories">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Summer</li>
                <li>Sport</li>
                <li>indoor</li>
                <li>winter</li>
                <li>formal</li>
                <li>boots</li>
              </ul>

              <span>Brands</span>
              <ul className="brands">
                <li>Nike</li>
                <li>Adidas</li>
                <li>Timberland</li>
                <li>Summer</li>
                <li>Sport</li>
                <li>indoor</li>
                <li>winter</li>
                <li>formal</li>
                <li>boots</li>
              </ul>

              <span>Colors</span>
              <ul className="colors">
                {colors.map((c)=>(
                  <li className='colorChoice' key={c.id} style={{
                    backgroundColor: `${c.color}`
                  }}></li>
                ))}

              </ul>

              <span>Price</span>
              <div className="priceFiter">
                <select name="" id="" onChange={(e) => setOption(e.target.value)}>
                  <option value="High to Low">High to low</option>
                  <option value="Low to high">Low to High</option>
                  <option value="Custom price">Custom Price</option>
                </select>
                {option.toLowerCase() === "custom price" ? (
                  <form action="">
                    <input type="number" placeholder='569.00'/>
                    <button>Filter</button>
                  </form>
                ): ""}
              </div>
          </div>

          <div className="right">
            <div className="wrapper">
              {latestProducts.map((product) => (
                <div className="card">
                  <Link className='routerLink' to={`/products/${product.id}`}>
                    <img src={product.img} alt="" />
                  </Link>

                  <div className="details">
                    <span className="title">{product.title}</span>
                    <span className="brand">Brand Name</span>
                    <span className="price">R{product.price}</span>
                    <button><ShoppingCartOutlinedIcon className='icon' /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Products