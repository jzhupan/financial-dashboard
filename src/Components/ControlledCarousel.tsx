import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';

import Container from "react-bootstrap/Container";

//import ChartsGroupCard from './ChartsGroupCard';


const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (

      <Carousel className='controlled-carousel' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <SlideOne/>
        </Carousel.Item>
        <Carousel.Item>
          <SlideTwo />
        </Carousel.Item>
      </Carousel>

   

  )
}

export default ControlledCarousel

