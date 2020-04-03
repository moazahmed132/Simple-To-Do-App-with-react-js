import React, { Component } from 'react';
import Todoitems from './components/Todoitems/Todoitems';
import moduleName from './components/Additem/AddItem';
import AddItem from './components/Additem/AddItem';
class App extends Component {
  state = {
    items: [
      { id: 1, name: 'hamza', age: 22 },
      { id: 2, name: 'moaz', age: 21 },
      { id: 3, name: 'abdo', age: 24 }
    ]
  }
  render() {
    return (
      <div className="App">
        Todo list app
        <Todoitems />
        <AddItem />
      </div>
    );
  }
}

export default App;
