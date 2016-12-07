import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewConversation extends Component {
  constructor(props) {
    super(props);
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest(e) {
    e.preventDefault();
    let subject = this.refs.subject.value;
    let body = this.refs.body.value;
    let sent_from = this.props.currentUser;
    let sent_to = this.props.sentTo;
    $.ajax({
      url: '/api/conversations',
      type: 'POST',
      dataType: 'JSON',
      data: { conversation: { subject, body, sent_from, sent_to } }
    }).done( _ => {
      alert("Message Sent!");
    })
    //this.props.sentTo (project user)
    //this.props.currentUser
  }
   
  render() {
    return(
      <div>
        <form onSubmit={this.sendRequest}>
          <div>
            <input ref="subject" type="text" defaultValue="Request to collab"/>
          </div>
          <div>  
            <textarea ref="body" 
                      type="text" 
                      defaultValue="I like the way that you think, let's get together and collab!">
            </textarea>
          </div>
          <div>  
            <button type='submit' className='btn btn-primary'>Send</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.auth.id}
}

export default connect(mapStateToProps)(NewConversation);
