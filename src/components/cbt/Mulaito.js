import React, { Component } from 'react';
import Menu from '../../components/Header/Menu';
import { Redirect } from 'react-router-dom';
import { Card, Button, CardHeader,  CardBody, Table } from 'reactstrap';
import Soal from '../../components/cbt/Soal';
import NoSoal from '../../components/cbt/Nosoal';

export default class Mulaito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            jmlkolom: 5,
            redirectToReferrer: false
        };
    }

    componentWillMount(){
        if(sessionStorage.getItem('userData'))
        {
            let dataSession = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({redirectToReferrer: true});
        }
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
            <h2 align="center">No Soal : <font color="red"><strong>{this.props.match.params.kodesoal}</strong></font></h2>
            <br />
            <div className="row">
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" align="center">
                    <Soal />
                </div> 
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" align="center">
                    <h6>Pilih No Soal</h6>
                    <NoSoal />
                <br />
                </div>
            </div>
        </div>
    </div>
    )
}
}
