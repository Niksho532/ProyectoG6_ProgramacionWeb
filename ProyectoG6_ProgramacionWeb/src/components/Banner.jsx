import React, { useState, useEffect } from 'react'

function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3; 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % totalSlides);
    }, 5000); 
    return () => clearInterval(interval);
  }, [totalSlides]);

  const prevSlide = () => {
    setActiveSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setActiveSlide(prev => (prev + 1) % totalSlides);
  };

 
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="banner-container">
      <button className="carousel-control prev" onClick={prevSlide}><i className="fa fa-chevron-left"></i></button>
      
      <div className={`banner ${activeSlide === 0 ? 'active' : 'hidden'}`} style={{ backgroundImage: 'linear-gradient(to right, #E6006D, #EF0166)' }}>
        <img 
          src="/images/image.png" 
          alt="Boom del Ahorro" 
          className="banner-image" 
        />
      </div>
      
      <div className={`banner ${activeSlide === 1 ? 'active' : 'hidden'}`}>
        <img 
          src="/images/image2.png" 
          alt="Próximamente" 
          className="banner-image" 
        />
      </div>
      
      <div className={`banner ${activeSlide === 2 ? 'active' : 'hidden'}`}>
        <img 
          src="/images/image3.png" 
          alt="Próximamente" 
          className="banner-image" 
        />
      </div>
      
      <div className="banner-indicators">
        {[...Array(totalSlides)].map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${activeSlide === index ? 'active' : ''}`} 
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      
      <button className="carousel-control next" onClick={nextSlide}><i className="fa fa-chevron-right"></i></button>
    </div>
  )
}

export default Banner