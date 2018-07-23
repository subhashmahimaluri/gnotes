import React, { Component } from 'react';

import Header from '../containers/Header';
import AddNoteForm from './AddNoteForm';
import NotesList from './NotesList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      note: {}
    }
  }

  editNote = (note) => {
    this.setState({note});
  }

  render() {
    return (
      <div>
          <Header />
          <div className="container-fluid">
            <div className="row main-wrapper">
              <div className="col-sm-5 col-md-3 sidebar">
                <NotesList doWhatever={this.editNote} />
              </div>
              <div className="col-sm-7 col-md-9 main">
                <AddNoteForm note={this.state.note} />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
