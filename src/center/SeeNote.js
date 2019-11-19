import React from 'react';
import Note from 'Note';
import NoteContent from 'NoteContent';
import store from '../dummy-store';

export default function SeeNote(props) {
  //find a note by id
  const note = store.notes.find(note=> note.id === props.match.params.noteId);
  return (
    <div className='note-view'>
      <Note
      noteId={note.id}
      noteName={note.name}
      ></Note>
      <NoteContent
      noteId={note.id}
      noteContent={note.content}
      ></NoteContent>
    </div>
  )
}