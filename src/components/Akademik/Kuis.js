import React, {Component} from 'react';
import { GetData } from '../../services/GetData';
import {Redirect} from 'react-router-dom';
import Menu from '../../components/Header/Menu';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

class Kuis extends Component {
    constructor () {
        super();
        this.state ={
          data: [],
          redirectToReferrer: false,
          nis: '',
          modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
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
            // console.log(this.state.data);
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
                        <td><Button color="danger" onClick={this.toggle}>...</Button></td>
                    </tr>
      
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
                    <ul>
                       Nilai 1 : 55 <br/>
                       Nilai 2 : 65 <br/>
                       Nilai 3 : 75 <br/>
                       Nilai 4 : 85 <br/>
                    </ul>
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