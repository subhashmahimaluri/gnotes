import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, editNote } from '../actions';
import { Button } from 'react-bootstrap';

const Note = (props) => {
  return(
    <div className='card'>
      <div className="card-body">
        <div>
          <h4 className="card-title">{props.note.title}</h4>
          <p className="card-text">{props.note.body}</p>
          <div className="note-edit-buttons">
            <Button className="edit" onClick={props.doWhatever.bind(this, props.note)}><span className="glyphicon glyphicon-edit"></span></Button>
            <Button className="remove-button" onClick={() => props.deleteNote(props.note.id)}><span className="glyphicon glyphicon-remove"></span></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { deleteNote, editNote })(Note);
