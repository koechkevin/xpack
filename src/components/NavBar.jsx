import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


export class Nav extends React.Component{
  state = {
    r:{
      status:0
    }
  };

   handleClick = async () => {
     const r = await API.fetchAll();
     this.setState({r});
   };

   render(){
     const {r} = this.state;
     return(
       <div className="nav">
         <button onClick={this.handleClick}>click me</button>
         {r&&r.status}
       </div>
     );
   }
}

export class API {
  static async fetchAll(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response;
  }
}

const NavBar = () => (
  <Nav />
);

export default connect()(NavBar);
