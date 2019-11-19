import React from "react";

export default class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="noteful-routing">
        <Header
        
        ></Header>
        <Sidebar
        
        ></Sidebar>
        <Content
        
        ></Content>
      </div>
      
    )
  }
}
