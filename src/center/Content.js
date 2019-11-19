import React from "react";
import { Switch, Route } from "react-router-dom";
import Store from '../dummy-store';
import SeeAllNotes from './SeeAllNotes';
//shows all notes for MainPage
//shows all notes in folder for folder view
//shows selected note and desc in note view
export default function Content(props) {
  return (
    <Switch>
      <Route exact path="/" render={()=><SeeAllNotes notes={Store.notes}></SeeAllNotes>}></Route>
      <Route path="/folder/:folderId" render={(routerprops)=> {
        let folderId = routerprops.match.params.folderId;
        let notes = Store.notes.filter(n=>n.folderId===folderId);
        return <SeeAllNotes notes={notes}></SeeAllNotes>
      }}></Route>
      <Route path="/note/:noteId" render={()=>{

      }}></Route>
    </Switch>
  );
}
