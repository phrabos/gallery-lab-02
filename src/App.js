import Header from './header.js';
import './App.css';
import React from 'react';
import ImageList from './ImageList.js';
import images from './data';

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
  render() {

    // console.log(this.state.horns)
    const uniques = Array.from(new Set(images.map(image => image.keyword)));
    const keywordArray = uniques.map(unique => (<option key={Math.random()} value={unique}>{unique}</option>))
    const filteredCreatures = images.filter((image)=> {
      if (!this.state.keyword) return true;
      if (image.keyword === this.state.keyword) return true;
      return false;
    });
    const uniqueHorns = Array.from(new Set(filteredCreatures.map(image => image.horns)));
    const hornsArray = uniqueHorns.map(horn => (<option key={Math.random()} value={horn}>{horn}</option>));
    const filteredByHorns = filteredCreatures.filter((animal)=> {
      
        if (!this.state.horns) return true;
        if (animal.horns.toString() === this.state.horns) return true;
        console.log(animal.horns, this.state.horns)
        return false;
    })

    return (
      <div className="App">
        <Header />
        <select 
          value={this.state.keyword}
          onChange={(e) => {
            this.setState({
              keyword: e.target.value
            })
          }} 
          >
          <option value={''}>- Choose A Category -</option>
          {keywordArray}
        </select><br/>
        <select 
          value={this.state.horns}
          onChange={(e) => {
            this.setState({
              horns: e.target.value
            })
          }} 
          >
          <option value={''}>- No. of Horns -</option>
          {hornsArray}
        </select>
          <div className='image-div'>
            <ImageList images={filteredByHorns}/>
          </div>
      
      </div>
    );
  };
}

