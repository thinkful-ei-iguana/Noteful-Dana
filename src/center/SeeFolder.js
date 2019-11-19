import React from 'react';
import Note from 'Note';
import store from '../dummy-store';

export default function SeeFolder(props) {
 //make an array of Notes
 const folder = store.find(f=> f.id===props.match.params.folderId);
 const notes = folder.map(note => {
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
  </div>
 ) 
}