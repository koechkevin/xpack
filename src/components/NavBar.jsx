import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";


class NavBar extends React.Component{
   async componentDidMount() {
     const r = await API.fetchAll();
     console.log(r);
   }
   render(){
  return(
    <div className="nav">
      this is a Navbar
    </div>
  );
}
 }

class API {
  static async fetchAll(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response;
  }
}
export default connect()(NavBar);
