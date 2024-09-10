import React, { CSSProperties } from 'react';
import './Carousel.scss';

type Props = {
  images: string[],
  // step: number,
  frameSize: number,
  itemWidth: number,
  // animationDuration: number,
  // infinite: boolean,
};

export const Carousel: React.FC<Props> = ({
  images,
  // step,
  frameSize,
  itemWidth,
  // animationDuration,
  // infinite,
}) => {
  const listStyles: CSSProperties = {
    width: `${itemWidth * frameSize}px`,
  };

  const itemStyles: CSSProperties = {
    width: `${itemWidth}px`,
  };

  return (
    <div className="carousel">
      <ul className="carousel__list" style={listStyles}>
        {images.map(image => (
          <li className="carousel__item" style={itemStyles}>
            <img src={image} alt={image} />
          </li>
        ))}
      </ul>

      <div className="carousel__buttons">
        <button type="button">Prev</button>
        <button type="button">Next</button>
      </div>
    </div>
  );
};
