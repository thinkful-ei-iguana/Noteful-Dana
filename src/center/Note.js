import React from 'react';

export default function Note(props) {
  return (
    <div className='note'>
      <h3>{props.noteTitle}</h3>
      {props.dateModified}
      <button>Delete</button>
    </div>
  )
}