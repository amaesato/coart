import React, { Component } from 'react';
import { Link } from 'react-router';
import MoreInfo from './MoreInfo';


class Footer extends Component {

  render() {
    return(
      <footer className='footer footer-color-black'>
        <MoreInfo />
        <div className='container'>
          <nav className='pull-left navbar collapse navbar-collapse'>
            <ul className="nav navbar-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/support'>Support</Link></li>
            </ul>
          </nav>

          <div className='copyright pull-right'>
            © 2016 co \\ art collaborative
          </div>
        </div>
      </footer>
    )
  }
}



export default Footer;
