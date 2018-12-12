import React, { Component } from 'react';
import Menu from '../../components/Header/Menu';
import {Redirect} from 'react-router-dom';
import { GetData } from '../../services/GetData';
import Button from 'reactstrap/lib/Button';

export default class Tocbt extends Component {
    constructor () {
        super();
        this.state = {
            data: [],
            redirectToReferrer: false
        };
    }

    componentWillMount(){
        if(sessionStorage.getItem('userData'))
        {
            let dataSession = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({redirectToReferrer: true});
            let dataNIS = dataSession[0]['cNIS'];
            let dataTK = dataSession[0]['cIdSekolahKelas'];
            // var replacedNIS = dataNIS.split(' ').join('');
            this.getInfoJadwalTO(dataTK);
        }
    }

    getInfoJadwalTO(param) {
        GetData('To/get_jadwalTO/'+param).then((result) => {
            let responseJson = result;
            this.setState({data: responseJson});
        });
    }

render() {
    if (!this.state.redirectToReferrer) {
        return (<Redirect to={'/'}/>)
    }

    return (
        <div>
        <Menu />
        <div className="container">
        <br />
        <h2 align="center">GOLearn <font color="red"><strong>TOCBT</strong></font></h2>
            <div className="row">
                <div className="col-md-8 ml-auto">
                <div className="table-responsive-sm">  
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
                    <tbody>
                      {
                          this.state.data.map ((datas, key)=> {
                            return (
                                <tr>
                                    <th>{key + 1}</th>
                                    <td>{datas.cPola}</td>
                                    <td>{datas.cKodeSoal}</td>
                                    <td>{datas.cBatasWaktu} Menit</td>
                                    <td><Button outline color="danger" size="sm">Mulai TO</Button></td>
                                    <td></td>
                                </tr>
                            )
                          })
                      }
                    </tbody>
		        </table>
            </div>
                </div>
                <div className="col-md-4 ml-auto">
                    <h5>Tata Tertib Pelaksanaan Tryout CBT :</h5>
                    <ul>
                        <li>Peserta mengecek kesesuaian identitas yang tampil di layar monitor</li>
                        <li>Mulai mengerjakan soal setelah mengklik "Mulai TO" pada kolom Tryout.</li>
                        <li>Menjawab butir soal dengan cara memilih/mengklik NoSoal dan Option Jawaban menggunakan mouse.</li>
                        <li>Peserta dapat mengubah pilihan jawaban dengan cara memilih/mengklik pilihan jawaban lain yang dianggap benar.Jawaban peserta otomatis akan terganti dengan pilihan jawaban yang terakhir.</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
    }
}
