import React from 'react';
import Note from './Note';
import store from '../dummy-store';

export default function SeeAllNotes(props) {
  //make an array of Notes from the store
  const notes = props.notes.map(note => {
    return (
      <Note
        noteId={note.id}
        noteName={note.name}
        dateModified={note.modified} 
      ></Note>
    ) 
   });
   return (
    <div className="inside-folder">
      {notes}
    </div>)
}