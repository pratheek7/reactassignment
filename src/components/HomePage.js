import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './HomePage.scss';

function HomePage() {
  return (
    <div className='home-page-container'>
      <div>
       <img src=".\images\buty.png" alt="nerf" width="200" height="150"></img>
       </div>
      <h1>

NERF GUN
      </h1>
      <p>A Nerf Blaster is a toy gun made by Hasbro that fires foam darts, discs, or foam balls. The term "Nerf gun" or the more common term “nerf blaster” are often used to describe the toy.</p>
      <div className='home-page-btn'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          START
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
