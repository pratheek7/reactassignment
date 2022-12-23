import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  buttonStyle,
  buttonSize
}) => {
  return (
    <Link to='/components' className='btn-mobile'>
      <button
        className={`btn ${buttonStyle} ${buttonSize}`}
      >
        {children}
      </button>
    </Link>
  );
};
