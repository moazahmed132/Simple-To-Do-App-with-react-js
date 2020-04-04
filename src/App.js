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
  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    })

    this.setState({ items });

    // second way to delete the clicked item
    /*
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i, 1);
    this.setState({ items });
    */
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });

  }
  render() {
    return (
      <div className="App container">
        <h1 className="text-center>">Student Data</h1>
        <Todoitems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
