import React, { useState, useEffect } from "react";

const Home = () => {
  const images = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg","/photo4.jpg"]; // Add your image paths here
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to change slide automatically
  const changeSlide = (index) => {
    setCurrentSlide((prevSlide) => (index >= 0 ? index : (prevSlide + 1) % images.length));
  };

  // Handle manual slide change via button click
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Set up automatic slide change every 3 seconds
    const slideInterval = setInterval(() => {
      changeSlide();
    }, 3000);

    // Clear interval when the component unmounts or slide is manually changed
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="division">
      <div className="first">
        <div className="inner">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="pic2"
          />
          <div className="slider-buttons">
            {images.map((_, index) => (
              <button
                key={index}
                className={`slider-button ${index === currentSlide ? "active" : ""}`}
                onClick={() => handleSlideChange(index)}
              >
              </button>
            ))}
          </div>
        </div>
        <div className="text-container">
          <p className="fashion">
            FASHION
            DELIVERED<br />
            <b>
              <span className="sixty">IN 60 MINS</span>
            </b>
          </p>
          <div className="partner">
            P a r t n e r &nbsp; w i t h &nbsp; u s
          </div>
          <div className="division">
            <div className="apply">APPLY FOR JOBS</div>
            <div className="apply">GO TO APP</div>
          </div>
          <div className="dot">
            <b>@dashdrobe.in</b>
            <div style={{display:'flex', gap:'10px'}}>
              <img src="/insta.png" alt="handles" className="handlesfake" />
              <img src="/facebook.png" alt="handles" className="handlesfake" />
              <img src="/twitter.png" alt="handles" className="handlesfake" />
              <img src="/linkedin.png" alt="handles" className="handlesfake" />
              <img src="/Playstore.png" alt="handles" className="handlesfake" />
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <img src="/photo2.png" alt="pic2" className="pic1" />
      </div>
    </div>
  );
};

export default Home;
