import React from 'react';
import Link from 'react-router';

const NoMatch = () => (
  <div className='text-center'>
    <h1>Whoops!</h1>
    <h3>You've reached a page that doesn't exist. #404life</h3>
    <br />
    <img className='img-responsive center-block' src='https://media.giphy.com/media/Zko99XD5cP8By/giphy.gif' alt='funny gif'/>
    <br />
    <br />
    <button className='btn-lg btn-primary'> Home </button>
  </div>
)

export default NoMatch;
