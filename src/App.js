import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-lists/card-list.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        <input
          onChange={e => {
            this.setState({ searchField: e.target.value });
          }}
          type='search'
          placeholder='Search here...'
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
