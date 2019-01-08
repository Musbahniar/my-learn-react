import soal from '../../assets/banksoal/123/26.png';

// function Soal() {
//     return (
//         <div>
//             {/* <img src={soal}  alt="Soal" className="img-responsive" height="300" /> */}
//             <h1>a</h1>
//         </div>
//     )
// }

// export default Soal

import React, { Component } from 'react'


class Soal extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.day}</h2>
      </div>
    )
  }
}

export default Soal;