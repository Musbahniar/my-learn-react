import React, { Component } from 'react';
import Menu from '../../components/Header/Menu';
import { Redirect } from 'react-router-dom';
import { Card, Button, CardHeader,  CardBody, Table } from 'reactstrap';
import soal from '../../assets/banksoal/123/26.png';

export default class Mulaito extends Component {
    constructor () {
        super();
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
            <h2>{this.props.title}</h2>
            <h2 align="center">No Soal : <font color="red"><strong>5</strong></font></h2>
            <br />
            <div className="row">
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" align="center">
                <img src={soal}  alt="Soal" className="img-responsive" height="300" />
                </div> 
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" align="center">
                    <h6>Pilih No Soal</h6>
                    <Table size="sm">
                        <tbody>
                        <tr>
                            <th>1 A</th>
                            <th>2 A</th>
                            <th>3 A</th>
                            <th>4 A</th>
                            <th>5 A</th>
                        </tr>
                        <tr>
                            <th>6 A</th>
                            <th>7 A</th>
                            <th>8 A</th>
                            <th>9 A</th>
                            <th>10 A</th>
                        </tr>
                        <tr>
                            <th>6 A</th>
                            <th>7 A</th>
                            <th>8 A</th>
                            <th>9 A</th>
                            <th>10 A</th>
                        </tr>
                        </tbody>
                    </Table> 
                    <Button color="primary">---SELESAI---</Button>{' '}
                <br />
                </div>
            </div>
        </div>
    </div>
    )
}
}
