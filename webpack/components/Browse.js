import React from 'react';
import Projects from './Projects';
import Profiles from './Profiles';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.reset = this.reset.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.generateCategoryOptions = this.generateCategoryOptions.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
    this.catSelect = this.catSelect.bind(this);
    this.artStyle = this.artStyle.bind(this);
    this.state = {profiles: [], projects: []}
  }

  componentWillMount() {
    $.ajax({
     url: '/api/browse_all',
     type: 'GET',
     dataType: 'JSON'
    }).done(data => {
     this.setState({profiles: data.profiles, projects: data.projects});
    }).fail(data => {
     console.log(data);
    });
   }

  reset() {
    this.refs.search.value = '';
    this.setState({ visibleItems: this.state.items, searching: false });
  }

  search() {
    let search = refs.searchInput.value;
    $.ajax({
      url: '/api/browse_all',
      type: 'GET',
      dataType: 'JSON'
    }).done( data => {
      this.setState({
        profiles: data.profiles,
        projects: data.projects });
    }).fail( data => {
      console.log(data)
    });
  }


  displayForm() {
    return(
      <form>
        <input type="checkbox" ref="category" />
        <input refs="searchInput" placeholder="Enter Username" />
        <button onClick={this.search}>Search</button>
        <select ref="filter" onChange={ this.changeFilter }>
          <option value="profiles">Profiles</option>
          <option value="projects">Projects</option>
          <option value="all">All</option>
        </select>
      </form>
    )
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
        <label onClick={ () => select } className='text-capitalize'>
          <p onClick={this.toggleCategory} > {categoryKey.split("_").join(" ")} </p>
        </label>

        { this.state.category ?
          select
          : null
        }

      </div>
    );
  });
  return categoryDropdowns;
}


  render() {
    {/*let src = this.state.profile;
    let cat = this.state.selectedCategories;
    let categories = Object.keys(cat).map( key => {
      let category = cat[key]
      return (
        <dd key={key} className="text-capitalize">
        { category.length ?
          <span><strong>{key}:{' '}</strong>{cat[key].join(", ")}</span>
          : null
        }
        </dd>
      )
    });*/}
    return (
      <div>
        { this.displayForm() }
        <Profiles />
        <Projects />
      </div>
    )
  }
}

export default Browse;
