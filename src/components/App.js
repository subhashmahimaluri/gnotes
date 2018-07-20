import React, { Component } from 'react';

import Header from '../containers/Header';
import AddNoteForm from './AddNoteForm';
import NotesList from './NotesList';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="container-fluid">
            <div className="row main-wrapper">
              <div className="col-sm-5 col-md-3 sidebar">
                <NotesList />
              </div>
              <div className="col-sm-7 col-md-9 main">
                <AddNoteForm />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
