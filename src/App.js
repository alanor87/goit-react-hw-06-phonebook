import React, { Component } from 'react';
import InputForm from './components/InputForm/';
import Filter from './components/Filter'
import PbookList from './components/PbookList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {

  state = {
    currName: '',
    currNumber: '',
    currentEditId: '',
    entries: [],
    modalIsOpen: false,
  }

  // componentDidMount() {
  //   if (localStorage.phoneBookentries) {
  //     const localEntries = JSON.parse(localStorage.phoneBookentries);
  //     if (localEntries.length) {
  //       this.setState({
  //         entries: [...localEntries]
  //       });
  //       return;
  //     }
  //   }

  //   this.setState({
  //     entries: [...(phonebook_db.map(entry => (
  //       { ...entry, id: uuidv4() }
  //     )))]
  //   });
  // }

  // componentDidUpdate() {
  //   localStorage.setItem('phoneBookentries', JSON.stringify(this.state.entries));
  // }

  render() {
    return (
      <div className="App" >
        <h1>PhoneBook / home</h1>
        <InputForm />
        <Filter />
        <PbookList />
      </div>
    );
  }

}

export default App;
