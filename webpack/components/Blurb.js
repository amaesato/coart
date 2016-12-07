import React, { Component } from 'react';
import { Link } from 'react-router';

class Blurb extends React.Component {

  render() {
    return(
      <div className='container'>
        <div className='blurb-div'>
          <p className='alt-font lead'>
            We provide a community for artists to Connect, Collaborate, and Create.
          </p>
          <h5>Learn more >>></h5>
        </div>
      </div>
    );
  }
}

export default Blurb;
