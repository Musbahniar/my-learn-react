import React from 'react';
import { Link } from "react-router-dom";

class Cbtrow extends React.Component {

    render() {
        return (
          <tr>
            <td></td>
            <td>{this.props.datato.cPola}</td>
            <td>{this.props.datato.cPeriode}</td>
            <td><Link to={'/dcbt/' + this.props.datato.cPola + '/' + this.props.datato.cPeriode} >Detail</Link></td>
          </tr>
        );
    }
  }

  export default Cbtrow;