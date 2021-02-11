import Header from './header.js';
import './App.css';
import React from 'react';
import ImageList from './ImageList.js';
import images from './data.js';
import images2 from './data2';
import Dropdown from './dropdown.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: 0,
  }
  handleNameChange = (e) =>{
    this.setState({
      keyword: e.target.value
    })
  }
  handleHornChange = (e) =>{
    this.setState({
      horns: Number(e.target.value)
    })
  }
  render() {
    const uniques = Array.from(new Set(images.map(image => image.keyword)));
    
    const filteredCreatures = images.filter((image)=> {
      if (!this.state.keyword) return true;
      if (image.keyword === this.state.keyword) return true;
      return false;
    });
    const uniqueHorns = Array.from(new Set(filteredCreatures.map(image => image.horns)));

    const filteredByHorns = filteredCreatures.filter((animal)=> {
      
        if (!this.state.horns) return true;
        if (animal.horns === this.state.horns) return true;
        return false;
    })

    return (
      <div className="App">
        <Header />
        <Dropdown 
          currentValue={this.state.keyword}
          handleChange={this.handleNameChange}
          options={uniques}
        />
        <Dropdown 
          currentValue={this.state.horns}
          handleChange={this.handleHornChange}
          options={uniqueHorns}
        />
        <button>Reset Filter</button>
          <div className='image-div'>
            <ImageList images={filteredByHorns}/>
          </div>
      
      </div>
    );
  };
}
