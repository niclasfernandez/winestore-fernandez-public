import React from 'react';
import Slider from 'infinite-react-carousel';
import './Carrousel.css'
 
const Carrousel = () => (
  <div className="containerCarrousel">
      <Slider dots>
      <div className="divCarrousel">
        <h1 className="sliderTitle">El mejor precio garantizado</h1>
        <img src="/portada1.jpeg" alt="Wine portrait 1"></img>
      </div>
      <div>
          <h1 className="sliderTitle">Importados y nacionales</h1>
          <img src="/portada2.jpeg" alt="Wine portrait 2"></img>
      </div>
      <div>
          <h1 className="sliderTitle">Ofertas todos los días</h1>
          <img src="/portada3.jpeg" alt="Wine portrait 3"></img>
      </div>
    </Slider>
  </div>
  
);

export default Carrousel;