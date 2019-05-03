import React, { Component } from 'react';
import './App.css';
import DisplayCharacter from './components/DisplayCharacter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      previous: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, next: data.next, previous: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  next = e => { 
    e.preventDefault();
    if(this.state.next != null){
      this.getCharacters(this.state.next);
    } else{
      return;
    }
  }

  previous = e => {
    e.preventDefault();
    if(this.state.previous != null) {
      this.getCharacters(this.state.previous);
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        <div className='characters'>
          {this.state.starwarsChars.map(char => {
            return <DisplayCharacter key={char.url} char={char} />
          })}
        </div>

        <div className='btns'>
          <button onClick={this.previous}>Previous</button>
          <button onClick={this.next} >Next</button>
        </div>

      </div>
    );
  }
}

export default App;
