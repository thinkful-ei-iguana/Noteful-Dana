import React from 'react';
// this is a seperate div displaying the content of the note.
export default function  NoteContent(props) {
  return (
    <div className='note-content' id={props.noteId}>
      {props.noteContent}
    </div>
  )
}