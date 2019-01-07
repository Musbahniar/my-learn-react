import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button} from 'reactstrap';
import NoSoalDetail from '../../components/cbt/Nosoaldetail';


const Nosoal = ({ days, onDayClicked }) =>
  <div className="weather-list flex-parent">
    {days.map((day, index) =>
      <NoSoalDetail
        key={day.id}
        day={day}
        index={index}
        onDayClicked={onDayClicked}
      />
    )}
  </div>

export default Nosoal;
// class Nosoal extends React.Component {
//     render() {
//         return (
//             // <table className="table">
//             //         <thead>
//             //             <tr>
//             //                 <th>#</th>
//             //                 <th>Pola</th>
//             //                 <th>Kd Soal</th>
//             //             </tr>
//             //         </thead>
//             // {this.props.days.map((datas, index) => {
//             //   return (
//             //       <tbody>
//             //       <tr key>
//             //         <td>{index + 1}</td>
//             //         <td>{datas.harga}</td>
//             //         <td>{datas.nama}</td>
//             //       </tr>
//             //       </tbody>
//             //   );
//             // })}
//             // </table>
//             <div>
//                 {this.props.days.map((day, index) =>
//                     <NoSoalDetail
//                         key={day.id}
//                         day={day}
//                         index={index}
//                         onDayClicked={onDayClicked}
//                     />
//                     )}
//             </div>
//         );
//       }
//   }


//   export default Nosoal;