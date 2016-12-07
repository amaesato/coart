import React, { Component } from 'react';
import { Link } from 'react-router';

const FooterMenu = () => {
  return(
    <ul className='list-unstyled' >
      <li>
        <Link to='/'>home</Link>
      </li>
      <li>
        <Link to='/about'>about</Link>
      </li>
      <li>
        <Link to='/featured'>featured</Link>
      </li>
      <li>
        <Link to='/support'>support</Link>
      </li>
    </ul>
  )
}

export default FooterMenu;
