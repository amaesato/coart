import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: 39.32098, long: -111.09373 };
  }

  // componentWillMount() {
  //   // make ajax call to get specific lat and long for map
  //   // set state and render the map
  //   // HTML5 location services if you need to get current users location
  //   //
  // }

  componentDidMount() {
    let handler = Gmaps.build('Google');
    handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
      let markers = handler.addMarkers([
        {
          "lat": 39.32098,
          "lng": -111.09373,
          "picture": {
            "url": "http://people.mozilla.com/~faaborg/files/shiretoko/firefoxIcon/firefox-32.png",
            "width":  32,
            "height": 32
          },
          "infowindow": "hello!"
        }
      ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
    });
  }

  render() {
    return(
      <div style={{width: '800px'}}>
       <div id='map' style={{width: '800px', height: '400px'}}> </div>
      </div>
    );
  }
}

export default Map;
