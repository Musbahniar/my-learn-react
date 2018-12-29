import React, {Component} from 'react';
import { GetData } from '../../services/GetData';
import {Redirect} from 'react-router-dom';
import Menu from '../../components/Header/Menu';

class Presensi extends Component {

    constructor () {
        super();
        this.state ={
        data: [],
        redirectToReferrer: false,
        nis: ''
        };
    }

    componentWillMount(){
        if(sessionStorage.getItem('userData'))
        {
            let dataSession = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({redirectToReferrer: true});
            let dataNIS = dataSession[0]['cNIS'];
            var replacedNIS = dataNIS.split(' ').join('');
            this.getInfoPresensi(replacedNIS);
        }
    }
    
    getInfoPresensi(param){
        GetData('Absen/get_byIDAbs/'+param).then((result) => {
            let responseJson = result;
            this.setState({data: responseJson});
            // console.log(this.state.data);
        });
    }

    render() 
    {
        if (!this.state.redirectToReferrer) 
        {
            return (<Redirect to={'/'}/>)
        }
        return 
        (
            <div>
            <Menu />
            <div className="container" align="center">
                <br />
                <h2>GOLearn <font color="red"><strong>Presensi</strong></font></h2>
                <div className="sub-heading">
                <h3 align='center'>Untuk sementara Presensi belum dapat kami upload.</h3>
                <h3 align='center'>
                Mohon maaf atas ketidaknyamanan ini.<br/><br/><br/><br/>
                </h3>
                </div>
            </div>
            </div>
        );
    }
}

export default Presensi;