import React, { Component } from 'react';
import { Link } from 'react-router';

class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.displayProfiles = this.displayProfiles.bind(this);
    this.state = { profiles: [], user: {} };
  }

  componentWillMount() {
   $.ajax({
    url: '/api/profiles',
    type: 'GET',
    dataType: 'JSON'
   }).done(profiles => {
    this.setState({profiles});
   }).fail(data => {
    console.log(data);
   });
  }

  displayProfiles() {
    let profiles = this.state.profiles.map( profile => {
      let { username } = profile.user;
      return(<li className="list-unstyled container" key={profile.id}>
                <div className='jumbotron'>
                  <h3>
                    <Link to={`/profiles/${profile.id}`}>
                      { username }
                    </Link>
                  </h3>
                  <p><strong>Bio:</strong> { profile.bio }</p>
                </div>
             </li>
           )
         });
    return profiles;
  }

  render() {
    return(
      <div className="container">
        <h2 className="header-text">Profiles</h2>
        <hr />
        <ul>
          { this.displayProfiles() }
        </ul>
      </div>
    )
  }
}

const styles = {
 hover1: {
   cursor: 'pointer'
 },
};

export default Profiles;
