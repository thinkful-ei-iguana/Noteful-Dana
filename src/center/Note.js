import React from 'react';
export default function Note(props) {
  return (
    <div className='note'>
      <button>{props.noteName}</button>
      {props.dateModified}
      <button>Delete</button>
    </div>
  )
}