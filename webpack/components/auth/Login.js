import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from './actions';
import { Link } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { error: false }
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    this.props.dispatch(handleLogin(email, password, this.props.history)
    );
  }

  render() {
    return(
      <div className='row'>
        <div className='col-xs-12 col-sm-6 col-sm-offset-6'>
          <h3>Login</h3>
          <form className='form-horizontal' onSubmit={ this.handleSubmit }>
            <div className='form-group'>
              <label className='col-sm-2 control-label'>Email</label>
              <div className='col-sm-6'>
                <input ref='email' className='form-control' placeholder='Email' />
              </div>
            </div>
            <div className='form-group'>
              <label className='col-sm-2 control-label'>Password</label>
              <div className='col-sm-6'>
                <input ref='password' type='password' className='form-control' placeholder='Password' />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-offset-2 col-sm-10'>
                <div className='checkbox'>
                  <label>
                    <input type='checkbox' /> Remember me
                  </label>
                </div>
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-offset-2 col-sm-10'>
                <button type='submit' className='btn btn-default hover-black'>Login</button>
                <br />
                <br />
                <p>Not registered yet?</p>
                <button className="btn btn-default hover-black"><Link to='/sign_up'>Sign Up</Link></button>
              </div>
            </div>
          </form>
          <div className='white-space'></div>
        </div>
      </div>
    )
  }
}

export default connect()(Login);
