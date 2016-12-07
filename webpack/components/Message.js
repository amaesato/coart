import React, {Component} from 'react';
import { Link } from 'react-router';
import Profile from './profile/Profile';
import Project from './Project';

class Message extends Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.displayMessages = this.displayMessages.bind(this);
    this.state = { messages: [] }
  }

  componentWillMount() {
    let conversationID = this.props.conversationID;
    $.ajax({
      url: `/api/conversations/${conversationID}/messages`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data => {
      this.setState({ messages: data })
    }).fail( data => {
      console.log('fail');
    });
  }

  sendMessage(e) {
    e.preventDefault();
    let body = this.refs.body.value;
    let conversationID = this.props.conversationID;
    $.ajax({
      url: `/api/conversations/${conversationID}/messages`,
      type: 'POST',
      data: { messages: { body }}
    }).done( data => {
      this.setState({ messages: [...this.state.messages,{id: data.id, body: data.body}] });
      this.refs.form.reset();
    }).fail( data => {
      console.log('broken');
    });
  }

  displayMessages() {
    let messages = this.state.messages.map( message => {
      return(<li className='list_unstyled' key={message.id}>
              <div>
                <p>{message.body}</p>
              </div>
            </li>
      );
    });
    return messages;
  }


  render() {
    return(
      <div>
        <ul>
          {this.displayMessages()}
        </ul>
        <form ref='form' onSubmit={this.sendMessage}>
          <div>
            <textarea ref='body' className='form-control' placeholder="Message"></textarea>
          </div>
          <div>
            <button type='submit' className='btn btn-default pull-left'>Send</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Message;
