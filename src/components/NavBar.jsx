import React from 'react';
import { connect } from 'react-redux';
import API from '../services/api';


export class Nav extends React.Component{
  state = {
    r:{
      status:0
    }
  };

   handleClick = async () => {
     const { response } = await API.fetchAll();
     this.setState({r:response});
   };

   render(){
     const {r} = this.state;
     return(
       <div className="nav">
         {/* eslint-disable-next-line react/button-has-type */}
         <button onClick={this.handleClick}>click me</button>
         {r&&r.status}
       </div>
     );
   }
}

const NavBar = () => (
  <Nav />
);

export default connect()(NavBar);
