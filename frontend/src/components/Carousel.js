import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltb351337451774f80/644037f7e1bb71132864bc67/Air_Jordan_1_Lost_and_Found_restock_bannersPrimary_Desktop.jpg?quality=75&auto=webp&format=pjpg&dpr=2&trim=0,0,80,0',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blta763c84367d0b3b5/6442c4521d4d37184e1cd93e/GlobalSKU_4-18SellerFee_Template_Primary_Desktop.jpg?quality=75&auto=webp&format=pjpg&dpr=2&trim=0,0,80,0',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

function CarouselItemComponent(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
            <img src={item.src} alt={item.altText} width='100%'/>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselItemComponent;