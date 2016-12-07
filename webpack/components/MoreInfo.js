import React, { Component } from 'react';
import { Link } from 'react-router';

class MoreInfo extends Component {
  render() {
    return(
      <div className='row-color'>
        <div className='container'>
          <div className='row'>
            <div className='navbar-toggle collapsed text-center'
              data-toggle='collapse'
              data-target='#more-info'
              aria-expanded='false'>
              <span className='sr-only'>Toggle More Info</span>
              <span className='glyphicon glyphicon-chevron-down navcon'></span>
            </div>

            <div className='collapse navbar-collapse' id='more-info'>
              <div className='col-sm-4 col-1-3'>
                <h5> Who We Are <small>what we do </small></h5>
                <span><p> We connect artists to inspire creative collaborations. Our goal is to foster relationships and help get artists back to what matters most: The creative process.</p> </span>
              </div>
              <div className='col-sm-4 divide col-1-3'>
                <h5>Contact</h5>
                <p>
                  370 300 E, Salt Lake City, UT 84111
                  <br />
                  CoArtCommunity@gmail.com
                </p>
              </div>
              <div className='divide col-sm-4 col-1-3 btn-text-grey'>
                <Link to='/sign_up' onClick={window.scrollTo(0,0)}>
                  <div className='custom-btn text-center'>
                    Sign Up \\ Collab
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoreInfo;
