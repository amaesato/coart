import React, { Component } from 'react';
import foamgeode from '../../images/foamgeode.jpg';
import Projects from '../Projects';
import categoryOptions from '../categoryOptions';
import AddProject from './AddProject';
import Select from 'react-select';
import DropZone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux';
import { loggedIn } from '../auth/actions';
import Conversation from './Conversation';
require('superagent-rails-csrf')(request);

const styles = {
  row: {
    backgroundColor: '#EDEDEF',
    minHeight: '300px',
  },
  textLink: {
    color: '#015FB6',
    cursor: 'pointer',
  }
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.catSelect = this.catSelect.bind(this);
    this.generateCategoryOptions = this.generateCategoryOptions.bind(this);
    this.addImage = this.addImage.bind(this);
    this.displayMyProjects = this.displayMyProjects.bind(this);
    this.state = {
                   conversations: [],
                   profile: {
                   categories: {}
                   },
                   user: {},
                   projects: [],
                   files: [],
                   edit: false,
                   category: true,
                   toggleAdd: false,
                   selectedCategories: {
                     music: [],
                     photography: [],
                     videography: [],
                     muralist: [],
                     painting: [],
                     drawing: [],
                     sculpture: [],
                     graphic_design: [],
                     performance: [],
                     literature: [],
                     hand_made: []
                   }
                 };
    this.categoryOptions = categoryOptions();
  }

  componentWillMount() {
    let id = this.props.params.id;
    $.ajax({
      url: `/api/profiles/${id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data =>{
      this.setState({
        profile: data.profile,
        projects: data.projects,
        user: data.user,
        selectedCategories: {...data.profile.categories},
        conversations: data.conversations
      });
    }).fail( data => {
      console.log(data)
    });
  }

  addImage(image_url) {
    let profile = Object.assign({}, this.state.profile, {image_url: image_url})
    this.setState({ profile });
  }

  updateProject(projects) {
    this.setState({ projects })
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  toggleCategory() {
    this.setState({ category: !this.state.category });
  }

  displayMyProjects() {
    return(
      <div className='bg-profile-project p-left'>
        <Projects profileId={this.props.params.id} projects={this.state.projects} />
      </div>
    )
  }

  editProfile(e) {
    e.preventDefault();
    let bio = this.refs.bio.value;
    let inspirations = this.refs.inspirations.value;
    let zip_code = this.refs.zip_code.value;
    let youtube = this.refs.youtube.value;
    let vimeo = this.refs.vimeo.value;
    let soundcloud = this.refs.soundcloud.value;
    let facebook = this.refs.facebook.value;
    let instagram = this.refs.instagram.value;
    let twitter = this.refs.twitter.value;
    let tumbler = this.refs.tumbler.value;
    let other = this.refs.other.value;
    let id = this.props.params.id;
    $.ajax({
      url: `/api/profiles/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: {
        profile: { bio,
                   inspirations,
                   zip_code,
                   youtube, vimeo, soundcloud, facebook,
                   instagram, twitter, tumbler, other
                 },
        cat: this.state.selectedCategories
      }
    }).done( data => {
      this.setState({ profile: data.profile })
      this.toggleEdit();
      window.scrollTo(0,0);
    }).fail( data => {
      console.log(data)
    });
  }

  generateCategoryOptions(key) {
    let options = [];
    let selected = [];
    let userCategory = this.categoryOptions[key];
    userCategory.forEach( subCategory => {
      options.push({ value: subCategory, label: subCategory });
    });
    return options
  }

  updateSelected(val, key) {
    let obj = {};
    obj[key] = val.split(",");
    let newObj = Object.assign({}, this.state.selectedCategories, obj);
    this.setState({ selectedCategories: newObj })
  }

  catSelect(categoryKey) {
    let options = this.generateCategoryOptions(categoryKey);
    let subCat = this.categoryOptions[categoryKey];
    return(
      <Select
        name="form-field-name"
        value={this.state.selectedCategories[categoryKey]}
        multi={true}
        options={options}
        onChange={ (val) => this.updateSelected(val, categoryKey) }
      />
    )
  }

  artStyle() {
  let categoryDropdowns = Object.keys(this.categoryOptions).map( categoryKey => {
    let select = this.catSelect(categoryKey);
    return(
      <div key={categoryKey}>
        <label className='text-capitalize'>{categoryKey.split("_").join(" ")}</label>

        { this.state.category ?
          select
          : null
        }

      </div>
    );
  });
  return categoryDropdowns;
}

  onDrop(files) {
    let file = files[0];
    let req = request.put(`/api/profiles/${this.state.profile.id}/`);
    req.setCsrfToken();
    req.attach('profile[image_url]', file);
    req.end( (err, res) => {
      this.addImage(res.body.profile.image_url);
    });
  }

  displayUserInfo() {
    let src = this.state.profile.image_url || foamgeode
    let { first_name, last_name, username } = this.state.user;
    return(
      <div>
        <h2> { first_name } { last_name } <small><i> { username } </i></small></h2>
      </div>
    )
  }

  userBtn() {
    let btn = this.state.edit ? 'BACK' : 'EDIT PROFILE';
    if(this.props.currentUser === parseInt(this.props.params.id)) {
      return(
        <p onClick={ () => this.toggleEdit()} className='btn hover-black animate-btn'>{btn} </p>
      )
    }
  }


  render() {
    let profileID = this.props.params.id;
    let src = this.state.profile.image_url || foamgeode
    let { zip_code,
          bio,
          inspirations,
          url,
          youtube,
          vimeo,
          facebook,
          twitter,
          instagram,
          soundcloud,
          tumbler,
          other  } = this.state.profile;
    let { categories } = this.state.profile.categories
    if(this.state.edit) {
      return(
        <div>
          <div className='row'>
            <div className='container row-color'>
              <br />
              <div className='col-xs-12 col-sm-6 col-md-3 img-div'>
                <div className='profile-img'>
                  <img src={ src } />
                </div>
                  <DropZone
                    className='dropzone'
                    onDrop={this.onDrop}
                    multiple={false}
                    accept='image/*'>
                    <div>
                      <br />
                    </div>
                    <button type='button' className='btn btn-default'>Change Image</button>
                  </DropZone>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-9'>
                <div className='p-left'>
                  { this.displayUserInfo() }
                  { this.userBtn() }
                </div>
                <br />
                <form onSubmit={this.editProfile}>
                  <dl className='dl-horizontal'>
                    <dt> Bio </dt>
                    <dd>
                      <textarea className='form-control' ref='bio' defaultValue={ bio }>
                      </textarea>
                    </dd>
                    <dt> Inspirations </dt>
                    <dd><input className='form-control'
                               ref='inspirations' type='text'
                               defaultValue={inspirations} />
                    </dd>
                    <dt> Zip Code </dt>
                    <dd><input className='form-control'
                               ref='zip_code' type='text' placeholder='Zip Code' />
                    </dd>
                    <dt> Categories </dt>
                    <dd> { this.artStyle() } </dd>
                    <dt>YouTube</dt>
                    <dd><input className='form-control' ref='youtube' placeholder='https://www.youtube.com/' /></dd>
                    <dt>vimeo</dt>
                    <dd><input className='form-control' ref='vimeo' placeholder='https://www.youtube.com/' /></dd>
                    <dt>soundcloud</dt>
                    <dd><input className='form-control' ref='soundcloud' placeholder='https://www.youtube.com/' /></dd>
                    <dt>facebook</dt>
                    <dd><input className='form-control' ref='facebook' placeholder='https://www.youtube.com/' /></dd>
                    <dt>twitter</dt>
                    <dd><input className='form-control' ref='twitter' placeholder='https://www.youtube.com/' /></dd>
                    <dt>instagram</dt>
                    <dd><input className='form-control' ref='instagram' placeholder='https://www.youtube.com/' /></dd>
                    <dt>tumbler</dt>
                    <dd><input className='form-control' ref='tumbler' placeholder='https://www.youtube.com/' /></dd>
                    <dt>other</dt>
                    <dd><input className='form-control' ref='other' placeholder='https://www.youtube.com/' /></dd>
                  </dl>
                  <input type='submit' className='btn btn-primary btn-xs animate-btn' />
                </form>
              </div>
            </div>
          </div>
          <div>
          { this.displayMyProjects() }
          </div>
        </div>
      )
    } else {
      let src = this.state.profile.image_url || foamgeode
      let cat = this.state.selectedCategories;
      let categories = Object.keys(cat).map( key => {
        let category = cat[key]
        return (
          <div key={key}>
          { category.length ?
            <dd className="text-capitalize">
              <span><strong>{key}:{' '}</strong>{cat[key].join(", ")}</span>
            </dd>
            : null
          }
          </div>
        )
      });

      return(
        <div>
          <div className='row'>
            <div className='container row-color'>
              <br />
              <div className='col-xs-12 col-sm-6 col-md-3 img-div'>
                <div className='profile-img'>
                  <img src={ src } />
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-9'>
                <div className='p-left'>
                  { this.displayUserInfo() }
                  { this.userBtn() }
                </div>
                <br />
                <dl className='dl-horizontal'>
                  <dt> Bio </dt>
                  <dd> { bio ? bio : 'help collaborators know more about you, add your bio' } </dd>
                  <dt> Inspirations </dt>
                  <dd> { inspirations ? inspirations : "let others know what you're about" } </dd>
                  <dt> Zip Code </dt>
                  <dd> { zip_code ? zip_code : "let other callaborators know you are close and open to collab"} </dd>
                  <dt> Categories</dt>
                  {categories}
                  <dt>External Links</dt>
                  <dd>{ youtube ? <a href={`${youtube}`}>Click</a> : null }</dd>
                </dl>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xs-12 col-sm-5 pull-right'>
              { this.displayMyProjects() }
            </div>

            <div className='container'>
              <div className='col-xs-12 col-sm-7'>
                <Conversation profileID={profileID} />
              </div>
            </div>

          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { currentUser: parseInt(state.auth.id) }
}

export default connect(mapStateToProps)(Profile);
