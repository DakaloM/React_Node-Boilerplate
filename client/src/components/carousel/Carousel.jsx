import React from 'react';
import "./carousel.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { latestProducts } from '../../productData';


const MultiCarousel = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    
  return (
    <div className='carousel'>
        <div className="header">
            <h1>Latest Products</h1>
        </div>
        <Carousel  
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            
        >
            {latestProducts.map(product =>(
                <div className='card' key={product.id}>
                    <div className="top">
                        <img src={product.img} 
                        alt="" />
                    </div>
                    <div className="bottom">
                        <span className="title">{product.title}</span>
                        <p className="desc">{product.desc}</p>
                        <span className="price">R{product.price}</span>
                        
                        
                    </div>
                    <div className="buttom">

                        <button>Add to cart</button>
                    </div>
                </div>
            ))}
            
            
        </Carousel>
    </div>
  )
}

export default MultiCarousel