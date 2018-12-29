import React, { Component } from 'react';
import Menu from '../../components/Header/Menu';
import { Redirect, Link } from 'react-router-dom';
import { GetData } from '../../services/GetData';
import { Card, Button, CardHeader,  CardBody } from 'reactstrap';
import JadwalTO from '../../components/cbt/Jadwalto';

export default class Tocbt extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            dataJadwalTO:[],
            redirectToReferrer: false,
            content: "Content from props..."
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

    mulaito = (kodesoal) => {
        // <MulaiTO contentProp = {this.state.content}/>
        this.props.history.push('/tryout');
        console.log(kodesoal);
    }

render() {
    if (!this.state.redirectToReferrer) {
        return (<Redirect to={'/'}/>)
    }

    const infoDataJdwal = this.state.data;
    return (
        <div>
        <Menu />
        <div className="container">
        <br />
        <h2 align="center">GOLearn <font color="red"><strong>TOCBT</strong></font></h2>
            <div className="row">
                <div className="col-md-8 ml-auto">
                <div className="table-responsive-sm">  
                <JadwalTO dataJadwalTO={infoDataJdwal} />
            </div>
                </div>
                <div className="col-md-4 ml-auto">
                <Card>
                    <CardHeader>Tata Tertib Pelaksanaan Tryout CBT</CardHeader>
                    <CardBody>
                    <ul>
                        <li>Peserta mengecek kesesuaian identitas yang tampil di layar monitor</li>
                        <li>Mulai mengerjakan soal setelah mengklik "Mulai TO" pada kolom Tryout.</li>
                        <li>Menjawab butir soal dengan cara memilih/mengklik NoSoal dan Option Jawaban menggunakan mouse.</li>
                        <li>Peserta dapat mengubah pilihan jawaban dengan cara memilih/mengklik pilihan jawaban lain yang dianggap benar.Jawaban peserta otomatis akan terganti dengan pilihan jawaban yang terakhir.</li>
                    </ul>
                    </CardBody>
                </Card>    
                <br />
                </div>
            </div>
        </div>
        </div>
    )
    }
}
