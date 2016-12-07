import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NewConversation from './NewConversation';


class Projects extends Component {
  constructor(props) {
   super(props);
   this.displayProjects = this.displayProjects.bind(this);
   this.toggleProject = this.toggleProject.bind(this);
   this.view = this.view.bind(this);
   this.paginate = this.paginate.bind(this);
   this.state = { projects: [],
                  project: false,
                  conversationView: false,
                  addform: false
                };
  }

  componentWillMount() {
     $.ajax({
       url: '/api/all_projects',
       type: 'GET',
       dataType: 'JSON'
     }).done( data => {
       this.setState({ projects: data });
     }).fail(data => {
       console.log(data);
     });
 }

  paginate() {
  if(this.props.displayProjects > 0) {
    return(
      <div>
        {(this.state.page > 1) ? <button className="btn" onClick={this.previousPage}>Prev</button> : null }
        {(this.props.displayProjects === 30) ? <button className="btn" onClick={this.nextPage}>Next</button> : null }
      </div>
    )
  }
  }

  changeView(e, view) {
    this.props.changeView(view)
    this.setState( {page: 1 } )
    let buttons = e.target.parentElement.children
    for(var button of buttons) {
      button.style.backgroundColor='#D0d7d5'
    }
  }

  previousPage() {
  this.setState( { page: (this.state.page += 1) } )
  }

  nextPage() {
  this.setState( { page: (this.state.page -= 1 ) } )
  }

  toggleProject() {
    this.setState({ project: !this.state.project });
  }


  view(projectUser, description) {
   if (this.state.conversationView) {
     return (
       <div>
         <div className="modal-body">
           <NewConversation sentTo={projectUser}/>
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
           <button
             onClick={() => { this.setState({ conversationView: false }) }}
             type="button"
             className="btn btn-primary"
           >
             Back
           </button>
         </div>
       </div>
     )
   } else {
      return (
       <div>
         <div className="modal-body">
           <p><strong>Description:</strong> {description}</p>
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
           { this.props.currentUser === projectUser ? null
             :
             <button
               onClick={() => { this.setState({ conversationView: true })} }
               type="button"
               className="btn btn-primary"
             >
               Request to Collab
             </button>
           }
         </div>
       </div>
      )
   }
  }


  displayProjects() {
    let projects = this.state.projects.map( project => {
      return(
        <li className="list-unstyled" key={project.id}>
          <div className='jumbotron projects-wrapper'>
            <div style={styles.hover1}>
              <h3>
               {project.name}
              </h3>
              <p><small>description:</small> {project.description}</p>
              <button className="btn btn-primary btn-xs"
                       onClick={this.toggleProject}
                       data-toggle="modal"
                       data-target={"#project-" + project.id}
              >
                More Info
              </button>
            </div>
            <div className="modal fade" id={"project-" + project.id} >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 className="modal-title">{project.name}</h4>
                  </div>
                    {this.view(project.project_user, project.description)}
                </div>
              </div>
            </div>
          </div>
        </li>
      );
   });
   return projects;
  }

  render() {
    return(
      <div className='container'>
        <h2 className='header-text'> Projects </h2>
        <hr />
        { this.displayProjects() }
        { this.paginate() }
      </div>
    )
  }
}


const styles = {
 hover1: {
   cursor: 'pointer'
 },
};

const mapStateToProps = (state) => {
  return { currentUser: parseInt(state.auth.id) }
}

export default connect(mapStateToProps)(Projects);
