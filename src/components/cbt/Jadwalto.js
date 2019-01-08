import React from 'react';
import { Link } from "react-router-dom";
import { Button} from 'reactstrap';

class Jadwalto extends React.Component {
    render() {
        return (
            <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Pola</th>
                            <th>Kd Soal</th>
                            <th>Waktu</th>
                            <th>Tryout</th>
                            <th>Evaluasi</th>
                        </tr>
                    </thead>
            {this.props.dataJadwalTO.map((datas, index) => {
              return (
                  <tbody>
                  <tr key>
                    <td>{index + 1}</td>
                    <td>{datas.cPola}</td>
                    <td>{datas.cKodeSoal}</td>
                    <td>{datas.cBatasWaktu} Menit</td>
                    <td><Link to={'/tryout/' + datas.cKodeSoal} ><Button outline color="danger" size="sm">Mulai TO</Button></Link></td>
                    <td><Link to={'/tryout/' + datas.cKodeSoal} >View</Link></td>
                  </tr>
                  </tbody>
              );
            })}
            </table>
        );
      }
  }


  export default Jadwalto;