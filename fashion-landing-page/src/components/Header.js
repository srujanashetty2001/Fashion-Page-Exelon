import React from 'react';
import Tags from './Tags';
import Navigation from './Navigation';

import './Header.css';
import Description from './Description';

const Header = () => {
  return (
    <div className="Right-container">
     <Navigation/>
     <Description/>
    <Tags />
    </div>
  );
};

export default Header;
