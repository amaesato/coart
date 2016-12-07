import React, { Component } from 'react';

class AddProject extends Component {
 constructor(props) {
   super(props);
   this.addProject = this.addProject.bind(this);
 }



 addProject(e) {
   e.preventDefault();
   let name = this.refs.name.value;
   let description = this.refs.description.value;
   let active = this.refs.active.value;
   $.ajax({
     url: `/api/profiles/${this.props.profileId}/projects/`,
     type: 'POST',
     data: { project: { name, description, active }},
     dataType: 'JSON'
   }).done (data => {
     this.props.addProjects(data);
     this.refs.form.reset();
   }).fail(data => {
     console.log(data)
   });
 }



 render() {
   return(
     <div className="row">
       <form onSubmit={ this.addProject } className='col-xs-12 col-sm-4'>
         <dl className='dl-horizontal'>
           <dt> Project Name </dt>
           <dd>
             <input className='form-control' ref='name' type='text' />
           </dd>
           <dt> Description </dt>
           <dd><input className='form-control'
                      ref='description' type='text' />
           </dd>
           <dt> Active Project </dt>
           <dd><input type='checkbox' ref='active' /></dd>

         </dl>
         <input type='submit' className='btn btn-primary btn-xs' />
       </form>
     </div>
   )
 }
}

export default AddProject;
