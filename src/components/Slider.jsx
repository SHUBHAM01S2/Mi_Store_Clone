import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css'
const Slider = ({start}) => {
  return (
    <Carousel>
      {start.map((item)=>(
        <Carousel.Item interval={2000} >
        <img
          className="b-block w-100"
          src={item}
          alt="First Slide"
          key={item}
        />
      </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
