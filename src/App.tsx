// import React, { useState } from 'react';
import './App.scss';
import { Carousel } from './components/Carousel';
import { getNumbers } from './utiles';

const images: string[] = [
  './img/1.png',
  './img/2.png',
  './img/3.png',
  './img/4.png',
  './img/5.png',
  './img/6.png',
  './img/7.png',
  './img/8.png',
  './img/9.png',
  './img/10.png',
];

const DEFAULT_VALUE_OF_STEP = 3;
const numberOfSteps: number[] = getNumbers(1, images.length);

export const App: React.FC = () => {
  // const [step, setStep] = useState(DEFAULT_VALUE_OF_STEP)

  return (
    <div className="app">
      {/* eslint-disable-next-line */}
      <h1 className='app__title'>Carousel with {images.length} images</h1>
      <Carousel
        images={images}
        // step={3}
        frameSize={3}
        itemWidth={130}
        // animationDuration={1000}
        // infinite={false}
      />
      <div className="app__inputs inputs">
        <label className="inputs__label">
          <input type="text" className="inputs__item" />
          Item Width
        </label>

        <label className="inputs__label">
          <input type="text" className="inputs__item" />
          Frame Size
        </label>

        <select
          id="stepSelector"
          className="inputs__label"
          value={DEFAULT_VALUE_OF_STEP}
        >
          {numberOfSteps.map(step => (
            <option value={step}>{step}</option>
          ))}
        </select>
        <label htmlFor="stepSelector">Step</label>

        <label className="inputs__label">
          <input type="text" className="inputs__item" />
          Item Width
        </label>
      </div>
    </div>
  );
};
