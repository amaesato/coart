import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import request from 'superagent';
require('superagent-rails-csrf')(request);

export const AddImage = (props) => {
  <DropZone
    className='col-xs-6 pull-right'
    onDrop={this.props.addImage}
    accept='image/*'>
    <div>
      <span> Drop image or click to upload </span>
    </div>
  </DropZone>
}


