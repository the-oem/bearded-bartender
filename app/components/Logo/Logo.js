import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className='link-home'>
    <div className='logo-container'>
      <img src='../assets/img/man-with-beard.svg' alt='beard guy logo' className='beard-icon'/>
      <div className='logo-title'><span>Bearded</span> <span>Bartender</span></div>
    </div>
    </Link>
  );
};

export default Logo;
