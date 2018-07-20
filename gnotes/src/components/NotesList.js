import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import Note from './Note';

export class NotesList extends Component {

  render() {
    return(
      <div>
        <h3>Notes</h3>
        {
          this.props.notes.map(note => {
            return(
              <Note key={note.id} note={note} />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { notes: state.notes };
}

export default connect(mapStateToProps, { addNote })(NotesList);
