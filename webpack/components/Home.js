import React, { Component } from 'react';
import { Link } from 'react-router';
import arrow from '../images/arrow.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import down from '../images/down.gif';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <div className='row'>
          <div className='container pad-top'>
            <div className='col-xs-12 pull-right text-right landing-font text-lrg'>
              <h1 className='padding-right-1'>Connect.</h1>
              <h1>Collaborate.</h1>
              <h1>Create.</h1>
            </div>

            <div className='col-xs-12 social'>
              <img src={facebook} alt='facebook' />
              <img src={instagram} alt='instagram' />
              <img src={twitter} alt='instagram' />
            </div>

            <div className='text-center'>
              <a href='#scrollDown' className='animation-slide'><img src={down} className='arrow'/> </a>
            </div>
          </div>


          <div className='row-color-size'>
            <div className='container' id='scrollDown'>
              <span className='header-text'>
                <h1>
                  Collaborative Art
                </h1>
                <h5>Creation through collaboration.   c o \\ art</h5>
              </span>
            </div>
            <div className='col-xs-12 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-3 p-left'>
              <h4 className='alt-font lead'>
                We provide a community for artists to CONNECT, COLLABORATE, and CREATE.<hr />
              <strong>Creatively inspired.</strong> Born from\\flourished by exposure to other creative mediums through collaboration.
              </h4>

              <div className='enter-btn animate-btn col-xs-3'>
                <Link to='/sign_up'>Sign Up</Link>
              </div>
              <div className='enter-btn animate-btn col-xs-3'>
                <Link to='/about'>Learn More</Link>
              </div>
            </div>
          </div>

        </div>

      </div>

    );
  }
}


export default Home;
