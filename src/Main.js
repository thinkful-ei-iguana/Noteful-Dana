import React from "react";
import Header from './Header';
import Sidebar from './side/Sidebar';
import Content from './center/Content';
export default class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="noteful-routing">
        {/* <Header
        
        ></Header>
        <Sidebar
        
        ></Sidebar> */}
        <Content
        
        ></Content>
      </div>
      
    )
  }
}
