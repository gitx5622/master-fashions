import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from "reactstrap";
import { carouselitems1, carouselitems2 } from "./constants";

function CarouselItemComponent(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === carouselitems1.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? carouselitems1.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // const goToIndex = (newIndex) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  const slides2 = carouselitems1.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          width="100%"
          height="50%"
          style={{ borderRadius: "19px", objectFit: 'contain' }}
        />
      </CarouselItem>
    );
  });

  const slides1 = carouselitems2.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          width="100%"
          height="50%"
          style={{ borderRadius: "19px", objectFit: 'contain' }}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="d-flex gap-4" style={{marginTop:"-20px"}}>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        style={{display: "flex", flexGrow: 1}}
      >
        {slides2}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
      </Carousel>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        style={{display: "flex", flexGrow: 1}}
      >
        {slides1}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
      </Carousel>
    </div>
  );
}

export default CarouselItemComponent;
