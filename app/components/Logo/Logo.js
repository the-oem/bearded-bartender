import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/' className='link-home'>Bearded <img src='../assets/img/man-with-beard.svg' alt='beard guy logo' className='beard-icon'/> Bartender</Link>
    </div>
  );
};

export default Logo;
