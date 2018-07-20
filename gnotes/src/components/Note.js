import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote, editNote } from '../actions';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Note extends Component {
  constructor () {
    super();

    this.state = {
      edit: false,
      title: '',
      body: '',
      id: ''
    }
  }

  save(id) {
    const note = {
      title: this.state.title,
      body: this.state.body,
      id
    }
    this.props.editNote(note);
  }

  render() {
    const { title, body, id } = this.props.note;

    return(
      <div className='card'>
        <div className="card-body">
          {this.state.edit ? (
            <Form className="note-edit-form">
              <FormGroup>
                <FormControl value={this.state.title} onChange={event => this.setState({ title: event.target.value })} />
                <FormControl value={this.state.body} onChange={event => this.setState({body: event.target.value })} componentClass="textarea" />
                <Button
                  className="btn-info"
                  onClick={ () => {
                      this.setState({ edit: false });
                      this.save(id);
                    }
                  }
                >
                  Save
                </Button>
              </FormGroup>
            </Form>
          ) : (
            <div>
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{body}</p>
              <div className="note-edit-buttons">
                <Button className="edit" onClick={() => this.setState({ edit: true, title, body })}><span className="glyphicon glyphicon-edit"></span></Button>
                <Button className="remove-button" onClick={() => this.props.deleteNote(id)}><span className="glyphicon glyphicon-remove"></span></Button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}


export default connect(null, { deleteNote, editNote })(Note);
