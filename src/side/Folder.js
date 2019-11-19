import React from 'react';
//simple folder containiner for a button
export default function Folder(props) {
  return (
    <button>
      {props.folderName}
    </button>
  )
}