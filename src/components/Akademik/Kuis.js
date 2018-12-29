import React, {Component} from 'react';
import { GetData } from '../../services/GetData';
import {Redirect} from 'react-router-dom';
import Menu from '../../components/Header/Menu';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Kuis extends Component {
    constructor () {
        super();
        this.state ={
        data: [],
        dataDetail: [],
        redirectToReferrer: false,
        nis: '',
        modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    
    toggle(currentTarget) {
        this.setState({
        modal: !this.state.modal
        });

        if (!this.state.modal)
        {
            console.log(currentTarget);
            this.getInfoKuisDetail('0219190016');
        }
    }

    componentWillMount(){
        if(sessionStorage.getItem('userData'))
        {
            let dataSession = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({redirectToReferrer: true});
            let dataNIS = dataSession[0]['cNIS'];
            var replacedNIS = dataNIS.split(' ').join('');
            this.getInfoKuis(replacedNIS);
        }
    }
    
    getInfoKuis(param){
        GetData('Kuis/get_byID/'+param).then((result) => {
            let responseJson = result;
            this.setState({data: responseJson});
        });
    }

    getInfoKuisDetail(param){
        GetData('Kuis/get_byID/'+param).then((result) => {
            let responseJson = result;
            this.setState({dataDetail: responseJson});
        });
    }

    render() {
    if (!this.state.redirectToReferrer) {
        return (<Redirect to={'/'}/>)
    }
    
    const infoData = this.state.data;
    let tampilInfo = '';
        if(infoData.length > 0) {
            tampilInfo = infoData.map( (obj, i) => {
            return (
                    <tr key>
                        <td>{i+1}</td>
                        <td>{obj.c_TanggalQuiz}</td>
                        <td>{obj.c_NamaPelajaran}</td>
                        <td>{obj.c_NamaBab}</td>
                        <td align="center">{obj.c_Total}</td>
                        <td><Button color="danger" onClick={()=>this.toggle(obj.c_TanggalQuiz)} >...</Button></td>
                    </tr>
                    )
            })
        }

    const infoDataDetail = this.state.dataDetail;
    let tampilInfoDetail = '';
        if(infoDataDetail.length > 0) {
            tampilInfoDetail = infoDataDetail.map( (obj,i) => {
            return (
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Nilai 1</td>
                            <td>{obj.c_Nilai1}</td>
                            <td>Remedial 1</td>
                            <td>{obj.c_Remed1}</td>
                        </tr>
                        <tr>
                            <td>Nilai 2</td>
                            <td>{obj.c_Nilai2}</td>
                            <td>Remedial 2</td>
                            <td>{obj.c_Remed2}</td>
                        </tr>
                        <tr>
                            <td>Nilai 3</td>
                            <td>{obj.c_Nilai3}</td>
                            <td>Remedial 3</td>
                            <td>{obj.c_Remed3}</td>
                        </tr>
                        <tr>
                            <td>Nilai 4</td>
                            <td>{obj.c_Nilai4}</td>
                            <td>Remedial 4</td>
                            <td>{obj.c_Remed4}</td>
                        </tr>
                        <tr>
                            <td>Nilai 5</td>
                            <td>{obj.c_Nilai5}</td>
                            <td>Remedial 5</td>
                            <td>{obj.c_Remed5}</td>
                        </tr>
                    </tbody>
		        </table>
                )
            })
        }
    // if(Object.keys(this.state.data).length > 0)
    if(infoData.length > 0)
    {
        return (
            <div>
            <Menu />
            <div className="container" align="center">
                <br />
                <h2>GOLearn <font color="red"><strong>Kuis</strong></font></h2>
            <div className="table-responsive-sm">  
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tgl Kuis</th>
                            <th>Mata Pelajaran</th>
                            <th>Bab</th>
                            <th>Total Nilai</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tampilInfo }
                    </tbody>
		        </table>
            </div>
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Detail Nilai Kuis</ModalHeader>
                <ModalBody>
                    { tampilInfoDetail }
                </ModalBody>
            </Modal>
            </div>
        );
    }
    else
    {
        return (
            <div>
            <Menu />
            <div className="container" align="center">
                <br />
                <h2>GOLearn <font color="red"><strong>Kuis</strong></font></h2>
                <div className="sub-heading">
                <h3 align='center'>Untuk sementara hasil Test Kuis belum dapat kami upload.</h3>
                <h3 align='center'>
                Mohon maaf atas ketidaknyamanan ini.<br/><br/><br/><br/>
                </h3>
                </div>
            </div>
            </div>
        );
    }
    }
}

export default Kuis;