import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { addNote, editNote } from '../actions';

class AddNoteForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      id: ''
    }
  }

  componentWillReceiveProps({note}){
    this.setState({title: note.title, body: note.body, id: note.id});
  }

  saveNote() {
      if(this.state.title.length !==0 && this.state.title.body !== 0) {
        if(this.state.id.length !== 0) {
          this.props.editNote(this.state);
        }
        else {
          this.props.addNote(this.state);
        }
        this.setState({title: '', body: '', id: ''});
      }
  }
  render() {
    
    return(
      <div>
        <div className="add-note pull-right">
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Note
        </div>
        <Form className="add_notes">
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            <FormControl value={this.state.title} onChange={event => this.setState({ title: event.target.value })} />
          </FormGroup>
          <FormGroup>
              <ControlLabel>Body</ControlLabel>
              <FormControl value={this.state.body} onChange={event => this.setState({body: event.target.value })} componentClass="textarea" />
              <FormControl type="hidden" value={this.state.id} onChange={event => this.setState({id: event.target.value })} />
          </FormGroup>
          <Button className="btn-info pull-right" onClick={() => this.saveNote()}>Save</Button>
        </Form>
      </div>
    )
  }
}

export default connect(null, { addNote, editNote })(AddNoteForm);
