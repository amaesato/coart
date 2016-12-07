import React from 'react';
import together from '../images/together.jpg';
import alex from '../images/alex.jpg';
import ann from '../images/ann.jpg';
import bryan from '../images/bryan.jpg';
import justin from '../images/justin.jpg';
import { Link } from 'react-router';
import dpl from '../images/dpl.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

const About = () => (
  <div>
    <div className='row'>
      <div className='container'>
        <div className='row-color col-xs-12 col-sm-9'>
          <h1 className="header-text" id='story'>About Us</h1>
          <br />
          <h4 className='lead'><strong>Our story</strong></h4> <p>...is as refreshingly simple as our core purpose: A few creative individuals connected with eachother, collaborated creatively, and created a project together. In the age of endless self-promotion, we recognize that there are more things pulling you away from the creative process than ever before. Enter  c o \\ art.
            <br />
            <br />
          <i> Simply put,</i> this website is not designed to make you famous. We are designed to connect artists together, with the hope that new art will be created and put into the world. It's no secret that it can be tough meeting other artists to collaborate with. Currently you can spend hours sifting through social media and online forums, or physically attend local art/music events to network - both of which definitely have their place, but our hope is to give you more direct access. The last thing artists need is another time consuming promotional/social channel to manage. We don't think soliciting for view-counts makes for an authentic community - that's why you don't see any 'like' buttons on our website. We are only as powerful as the users of our community, which means our only agenda is to connect open minded people together and enable creative output.</p>
        </div>
        <br />

        <div className='p-left col-xs-3'>

          <div className='enter-btn animate-btn'>
            <Link to='/sign_up'>Get Started</Link>
          </div>
          <br />
          <nav className='about-nav'>
            <ul >
              <li><a href="#story" className='header-text'> our story </a></li>
              <li><a href="#works" className='header-text'> how it works </a></li>
              <li><a href="#team" className='header-text'> the team </a></li>
              <li><a href="#arch" className='header-text'> the architecture </a></li>
              <li><a href="#education" className='header-text'> our education </a></li>
            </ul>
          </nav>

        </div>
      </div>
    </div>

    <div className='row p-left'>
      <div className='container section-border' id='works'>
        <h4 className='lead'><strong>How it works</strong></h4> <p>Signup and create a profile. Add your existing work so people can see what you're all about. You can also create an open project, which becomes searchable by other users. From there, you can start browsing to find other artists, or open projects. If you see a profile or project that looks interesting, or you simply want to just start a conversation, you can send a direct message. If you collaborate with someone on the site and complete a project, we would love for you to send it to us and we will highlight it on our Featured page.
          <br />
          <br />
          We know we have a lot of room to improve. We are building this site in our free time and will never charge a penny for membership. With that said, we look to our community to grow with us, and report site issues as they are discovered.
        </p>
      </div>
    </div>

    <br />
    <br />
    <div className='container' id='team'>
      <div className="row">
        <h3 className="header-text">The Team</h3>
        <hr />
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className='profile-pic'>
            <img className="img-rounded img-responsive" src={ann} alt="..." />
          </div>
          <div className="thumbnail">
            <div className="caption">
              <h3>Annie Hall</h3>
              <p> She puts the G in design ... <span className="glyphicon glyphicon-chevron-down" data-toggle='collapse' data-target="#viewMore1" aria-expanded='false' aria-controls='viewMore1' aria-controls='viewMore'></span></p>
              <div className='collapse' id='viewMore1'>
                <p>AKA Annie Tha Danga, has been referred to as "..the hottest up and coming rapper from the streets of St. George, showing the world the real struggles of SG life", and "the most dangerous influence on our youth since NWA..". She puts the G in design, and gave us the edge and street cred needed to standout in this digital market.</p>

              </div>
            </div>
          </div>
          <div className='pull-right'>
            <a href='https://www.linkedin.com/in/annie-hall-367280124' target='_blank'>
              <img src={linkedin} alt='linkedin' />
            </a>

            <a href='https://github.com/amaesato' target='_blank'>
              <img src={github} alt='github' className='left-indent'/>
            </a>
          </div>
        </div>

        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className='profile-pic'>

            <img className="img-rounded img-responsive" src={alex} alt="..." />
          </div>
          <div className="thumbnail">
            <div className="caption">
              <h3>Alex Quan</h3>
              <p>The man with the connections ... <span className="glyphicon glyphicon-chevron-down" data-toggle='collapse' data-target="#viewMore2" aria-expanded='false' aria-controls='viewMore2' aria-controls='viewMore2'></span></p>
              <div className='collapse' id='viewMore2'>
              <p>it's no wonder the streets call him Quan-Ties. With a scattered past, little is known about the only man who is somehow one degree of seperation away from both the President of the United States, and an unknown basket merchant somewhere in the forgotten villages of yemen. Undoubtedly this wesbite would not be in front of you today without his efforts.</p>
              </div>
            </div>
          </div>
          <div className='pull-right'>
            <a href='https://www.linkedin.com/in/alex-quan' target='_blank'>
              <img src={linkedin} alt='linkedin' />
            </a>

            <a href='https://github.com/Alxquan' target='_blank'>
              <img src={github} alt='github' className='left-indent'/>
            </a>
          </div>
        </div>


        <div className="col-xs-6 col-sm-4 col-md-3">
          <img className="img-rounded img-responsive" src={justin} alt="..." />
          <div className="thumbnail">
            <div className="caption">
              <h3>Justin Woodmansee</h3>
              <p>What words can be said ... <span className="glyphicon glyphicon-chevron-down" data-toggle='collapse' data-target="#viewMore3" aria-expanded='false' aria-controls='viewMore3' aria-controls='viewMore3'></span></p>
              <div className='collapse' id='viewMore3'>
              <p>to describe a person who is a living, breathing scientific anomoly? Often referrred to in the medical community as the "white hole" of mortal human life, his ability to turn endless letters and numbers into useable products continually defies universal law. Only time will tell what his continual reduction of entropy will continue to add to our app.</p>
              </div>
            </div>
          </div>
          <div className='pull-right'>
            <a href='https://www.linkedin.com/in/justin-woodmansee-940a19a8?trk=hp-identity-name' target='_blank'>
              <img src={linkedin} alt='linkedin' />
            </a>

            <a href='https://github.com/jwoodmansee' target='_blank'>
              <img src={github} alt='github' className='left-indent'/>
            </a>
          </div>
        </div>


        <div className="col-xs-6 col-sm-4 col-md-3">
          <img className="img-rounded img-responsive" src={bryan} alt="..." />
          <div className="thumbnail">
            <div className="caption">
              <h3>Bryan Anderson</h3>
              <p>No Records found ... <span className="glyphicon glyphicon-chevron-down" data-toggle='collapse' data-target="#viewMore4" aria-expanded='false' aria-controls='viewMore4' aria-controls='viewMore4'></span></p>
              <div className='collapse' id='viewMore4'>
                <p>for Bryan. Seriously.</p>
              </div>
            </div>
          </div>
          <div className='pull-right'>
            <a href='https://www.linkedin.com/in/bryan-noble-anderson' target='_blank'>
              <img src={linkedin} alt='linkedin' />
            </a>

            <a href='https://github.com/BryanAnderson84' target='_blank'>
              <img src={github} alt='github' className='left-indent'/>
            </a>
          </div>
        </div>
      </div>
    </div>

    <br />
    <div className='row'>
      <div className='container'>
        <h3 className="header-text" id='arch'>The Architecture</h3>
        <hr />
        <div className='col-xs-12 col-sm-8 col-sm-offset-3'>
          <p className='lead'>Ruby on Rails  .  ReactJS  .  JavaScript  .  Redux  .  PostgreSQL</p>
          <p className='lead'>Bootsrap  .  HTML5  .  CSS3  .  NodeJS  .  AWS</p>
          <p className='lead'>DropzoneJS  .  Heroku  .  Webpack  .  RSPEC  . JQuery</p>
        </div>
      </div>
    </div>

      <br />
      <br />
      <div className='container'>
        <h3 className='header-text' id='education'>Our Education</h3>
        <hr />
        <Link to='http://www.devpointlabs.com/' target='_blank'> <img className='col-xs-12 col-sm-4' src={dpl} alt='DPL' /> </Link>
      </div>
      <br />
      <br />
  </div>



)

export default About;
