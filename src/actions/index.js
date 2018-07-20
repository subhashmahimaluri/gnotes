export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export function addNote(notes) {
  return {
    type: ADD_NOTE,
    notes
  }
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  }
}

export function editNote(note) {
  return {
    type: EDIT_NOTE,
    note
  }
}
