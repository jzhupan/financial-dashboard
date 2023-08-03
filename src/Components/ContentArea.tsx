import React from "react";
import { Carousel } from "react-bootstrap";
import StockGraphics from "./StockGraphics";

const ContentArea = () => {
  return (
    <div>
      <h1>ContentArea</h1>
      <Carousel>
        <StockGraphics />
      </Carousel>
    </div>
  );
};

export default ContentArea;
