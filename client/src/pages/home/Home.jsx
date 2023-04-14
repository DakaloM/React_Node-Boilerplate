import React from 'react';
import "./home.scss";
import Navbar from '../../components/navbar/Navbar'
import MultiCarousel from '../../components/carousel/Carousel'
import { categories } from '../../productData'
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <MultiCarousel />
        <div className="categories">

          <div className="header">
            <h1>Browse Categories</h1>
          </div>
          <div className="wrapper">
            {categories.map((category) => (
              <div className="item">
                <img src={category.img} alt="" />
                <div className="itemDetails">
                  <span className="title">{category.title}</span>
                  <button>Shop</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home