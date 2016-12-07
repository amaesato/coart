import React from 'react';
import { Link } from 'react-router';
import concert from '../images/concert.jpeg';
import aliengraffiti from '../images/aliengraffiti.jpg';
import abandoned from '../images/abandoned.jpg';
import mooniestudio from '../images/mooniestudio.jpg';
import bandphoto from '../images/bandphoto.jpg';

const Featured = () => (
  <div className='container'>
    <h1 className="header-text text-center">Featured Projects</h1>
    <h4 className="text-center">The projects below were completed and submitted by Artists who met on on this site</h4>
    <hr />
    <div className="row">
      <div className="col-xs-12 col-md-6">
        <div className="hovereffect thumbnail">
          <img src={aliengraffiti} alt="image" />
          <div className="overlay">
              <h2>'Hostile Takeover'</h2>
              <h2><i>by Phont and PenSull</i></h2>
              <p><strong>Tags:  </strong>Muralist</p>
      				<p><a href="/profiles/2">More >></a></p>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-6">
        <div className="hovereffect thumbnail">
          <img src={abandoned} alt="image" />
          <div className="overlay">
              <h2>'Abandoned'</h2>
              <h2><i>shot by Jill Fields \\ edited by Kevin Pule</i></h2>
              <p><strong>Tags:  </strong>Photography</p>
              <br />
      				<p><a href="/profiles/2">More >></a></p>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-6">
        <div className="hovereffect thumbnail">
          <img src={concert} alt="image" />
          <div className="overlay">
              <h2>'Bill Dyers - Live @ The Complex'</h2>
              <h2><i>shot by Ben Simond</i></h2>
              <p><strong>Tags:  </strong>Music, Photography</p>
      				<p><a href="/profiles/2">More >></a></p>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-6">
        <div className="hovereffect thumbnail">
          <img src={bandphoto} alt="image" />
          <div className="overlay">
              <h2>'Revivalist Band - Tour Promo Shoot'</h2>
              <h2><i>shot by Al Anderson \\ band: Revivalist</i></h2>
              <p><strong>Tags:  </strong>Music, Photography</p>
              <br />
      				<p><a href="/profiles/2">More >></a></p>
          </div>
        </div>
      </div>
    </div>
  <br />
  <hr />
  <br />
  <div className='col-sm-12'>
    <h3>
      <a href="/profiles/2">'No Lie' Music Video</a>
    </h3>
    <h4>Sundaii feat. Imij and Mycon</h4>
    <h4><i>Video by Josio Moreno</i></h4>
    <p><strong>Tags:  </strong>Music, Videography</p>
    <div className="embed-responsive embed-responsive-16by9">
      <br />
      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/jDlNDKyj3Iw">
      </iframe>
    </div>
    <br />
    <hr />
    <br />
    <div className='col-sm-12'>
      <h3>
        <a href="/profiles/2">In the studio - Promo shoot</a>
      </h3>
      <h4>Photography by Lynn Winslow</h4>
      <p><strong>Tags:  </strong>Music, Photography</p>
      <div>
        <img src={mooniestudio} className='img-responsive img-rounded'/>
      </div>
    </div>
  </div>
</div>
)

export default Featured;
