import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';
import Login from './auth/Login';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(handleLogout(this.props.history));
  }

  authLink() {
    if (this.props.isAuthenticated) {
      return (
        [
          <li key="auth-link-0"><Link to={`/profiles/${this.props.userId}`}>My Profile</Link></li>,
            // profile needs to be /profile/id
            // where do we get the id?
          <li key="auth-link-1"><a href="#" onClick={this.logout}>Logout</a></li>
        ]
      )
    } else {
      return(
        <li className='dropdown'>
          <Link to="/login">Login</Link>
        </li>
      );
    }
  }

  render() {
    return (
      <nav className="navbar nav-bg">
        <div className="container-fluid">

          {/*Logo Display*/}
          <div className="navbar-header">
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#mobile-nav' aria-expanded='false'>
              <span className='sr-only'>Toggle Nav</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link to='/' className="logo-text">
              c o \\ art
            </Link>
          </div>


          <div className="collapse navbar-collapse" id='mobile-nav'>
            <ul className="nav navbar-nav navbar-right">
              <li className='dropdown'>
                <Link to='/browse' className='dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                  Browse<span className='caret'></span>
                </Link>
                <ul className='dropdown-menu'>
                  <li><Link to='/all_projects'>Projects</Link></li>
                  <li><Link to='/profiles'>Profiles</Link></li>
                  <li><Link to='/featured'>Featured</Link></li>
                </ul>
              </li>
              <li><Link to='/about'>About</Link></li>
              { this.authLink() }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userId: state.auth.id
  }
}

export default connect(mapStateToProps)(Navbar);
