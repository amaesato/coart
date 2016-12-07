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
   this.addProject = this.addProject.bind(this);
   this.projectForm = this.projectForm.bind(this);
   this.toggleAdd = this.toggleAdd.bind(this);
   this.showForm = this.showForm.bind(this);
   this.state = { projects: [],
                  project: false,
                  conversationView: false,
                  addform: false
                };
  }

  componentWillMount() {
     let url;
     if(this.props.profileId)
       url = `/api/profiles/${this.props.profileId}/projects/`;
     else
       url = '/api/all_projects';
     $.ajax({
       url: url,
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

  addProject(e) {
   e.preventDefault();
   let name = this.refs.name.value;
   let description = this.refs.description.value;
   let active = this.refs.active.value;
   $.ajax({
     url: `/api/profiles/${this.props.profileId}/projects/`,
     type: 'POST',
     data: { project: {  name, description, active }},
     dataType: 'JSON'
   }).done (data => {
     let projects = this.state.projects;
     projects.push(data);
     this.setState({ projects: projects });
     this.refs.form.reset();
   }).fail(data => {
     console.log(data)
   });
  }

  deleteProject(id) {
  let projects = this.state.projects
  $.ajax({
    url: `/api/profiles/${this.props.profileId}/projects/${id}`,
    type: 'DELETE',
    dataType: 'JSON'
  }).done( data => {
    let deleteIndex = projects.findIndex( project => project.id === id )
    this.setState({ projects:
      [...projects.slice(0, deleteIndex),
       ...projects.slice(deleteIndex +1, projects.length)] });
  })
  }

  toggleProject() {
   this.setState({
     project: !this.state.project
   });
  }

  toggleAdd() {
   this.setState({ toggleAdd: !this.state.toggleAdd });
  }

  showForm() {
   this.refs.form.reset();
   this.setState({ addform: !this.state.addform });
  }


  projectForm() {
   let addbtn = this.state.addform ? 'CANCEL' : 'ADD PROJECT';
   if(this.props.currentUser === parseInt(this.props.profileId)) {
   return(
     <div>
       <div>
         <span className='btn hover-black animate-btn' onClick={this.showForm} data-toggle='collapse' aria-expanded='false' aria-controls='hideForm' data-target='#hideForm'>
           {addbtn}
         </span>
       </div>
       <div>
         <form onSubmit={ this.addProject } ref='form' className='collapse' id='hideForm'>
           <dl className='dl-horizontal'>
             <dt> Project Name </dt>
             <dd>
               <input className='form-control' ref='name' type='text' />
             </dd>
             <dt> Description </dt>
             <dd><textarea className='form-control'
               ref='description' type='text'/>
             </dd>
             <dt> Active Project </dt>
             <dd><input type='checkbox' ref='active' /></dd>

           </dl>
         <input type='submit' onClick={this.state.addform} className='btn btn-primary btn-xs' />
       </form>
       </div>
   </div>

  )}
  }

  view(projectUser, description, id) {
    if (this.state.conversationView) {
      return (
       <div>
         <div className="modal-body">
           <NewConversation sentTo={projectUser}/>
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-default btn-xs" data-dismiss="modal">Close</button>
           <button
             onClick={() => this.setState({ conversationView: false }) }
             type="button"
             className="btn btn-primary btn-xs"
           >
             Back
           </button>
         </div>
       </div>
      )
    } else {
      let user = this.props.currentUser !== projectUser;
      return (
       <div>
         <div className="modal-body">
           <p><strong>Description:</strong> {description}</p>
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
           { user ?
             <button onClick={() => this.deleteProject(project.id)} className="btn btn-danger btn-xs">Delete</button>
             :
             <button
               onClick={() => { this.setState({ conversationView: true })} }
               type="button"
               className="btn btn-primary"
             > Request to Collab </button>
           }
         </div>
       </div>
      )
      }
  }


  displayProjects() {
    let projects = this.state.projects.map( project => {
      if(this.props.currentUser === parseInt(this.props.profileId)) {
        return(
          <li key={project.id}>
            <p onClick={this.toggleProject}
            data-toggle="modal"
            data-target={"#project-" + project.id}
            className='header-text'
            style={styles.hover1}> { project.name }</p>

            <div className="modal fade" id={"project-" + project.id} >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 className="modal-title">{project.name}</h4>
                  </div>
                    {this.view(project.project_user, project.description, project.id)}
                </div>
              </div>
            </div>
          </li>
        )
      } else {
        return(
          <li className="list-unstyled" key={project.id}>
            <div>
              <div style={styles.hover1}>
                <h4>
                 {project.name}
                </h4>
                <p><small>description:</small> {project.description}</p>
                <button className="btn btn-primary btn-xs"
                         onClick={this.toggleProject}
                         data-toggle="modal"
                         data-target={"#project-" + project.id}
                >
                  More Info
                </button>
                <button onClick={() => this.deleteProject(project.id)} className="btn btn-danger btn-xs">Delete</button>
              </div>
              <div className="modal fade" id={"project-" + project.id} >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
                      <h4 className="modal-title">{project.name}</h4>
                    </div>
                      {this.view(project.project_user, project.description, project.id)}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      }
   });
   return projects;
  }

 render() {
   let header = this.props.profileId ? 'My Projects' : 'Projects';
     return(
       <div>
         { this.projectForm() }
         <h3 className="header-text">{header}</h3>

         <ul>
           { this.displayProjects() }
         </ul>
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
