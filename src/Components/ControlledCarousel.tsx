import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import ChartsGroupCard from './ChartsGroupCard';
import ChartsGroupCardTwo from './ChartsGroupCardTwo';

//import ChartsGroupCard from './ChartsGroupCard';


const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (

      <Carousel className='controlled-carousel' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ChartsGroupCard />
        </Carousel.Item>
        <Carousel.Item>
          <ChartsGroupCardTwo />
        </Carousel.Item>
      </Carousel>

   

  )
}

export default ControlledCarousel

