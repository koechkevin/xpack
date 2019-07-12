import React from 'react';
import { connect } from 'react-redux';


export class Nav extends React.Component{

  render(){
    return(
      <div className="nav" />
    );
  }
}

const NavBar = () => (
  <Nav />
);

export default connect(null, {})(NavBar);
