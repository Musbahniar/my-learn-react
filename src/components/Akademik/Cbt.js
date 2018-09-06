import React from 'react';
import Menu from '../../components/Header/Menu';

class Cbt extends React.Component {
  constructor () {
    super();
    this.state ={
      data: []
    };
  }
  
    render() {  
      return (
        <div>
          <div>
            <Menu />
          <div className="container" align="center">
          <br />
          <h2 align="center">GOLearn <font color="red">Nilai TO CBT</font></h2>
          <br />
          
          </div>
        </div>
        </div>
      );
    }
  }

  export default Cbt;