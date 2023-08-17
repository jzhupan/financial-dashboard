import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import Container from "react-bootstrap/Container";


const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid>
      <Carousel activeIndex={index} onSelect={handleSelect} className='controlled-carousel-box'>
        <Carousel.Item>
        <SlideOne/>
        </Carousel.Item>
        <Carousel.Item>
          <SlideTwo />
        </Carousel.Item>
        <Carousel.Item>
          <SlideThree />
        </Carousel.Item>
      </Carousel>
    </Container>

  )
}

export default ControlledCarousel

