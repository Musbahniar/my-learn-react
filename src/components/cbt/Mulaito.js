import React, { Component } from 'react';
import Menu from '../../components/Header/Menu';
import { Redirect } from 'react-router-dom';
import { GetData } from '../../services/GetData';
import Soal from '../../components/cbt/Soal';
import Nosoal from '../../components/cbt/Nosoal';
import './cbt.css';

export default class Mulaito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            soalData:[],
            selectedNoSoal:null
        };
        this.onNoSoalClicked = this.onNoSoalClicked.bind(this);
    }

    componentDidMount() {
        GetData('React/kunciJawaban').then((result) => {
            let responseJson = result;
            this.setState({ soalData: responseJson });
        });
    }

    componentWillMount(){
        if(sessionStorage.getItem('userData'))
        {
            let dataSession = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({redirectToReferrer: true});
        }
    }

    onNoSoalClicked(dayIndex) {
        this.setState({ selectedNoSoal: dayIndex });
        // console.log(this.state.selectedNoSoal);
    }

render() {
    if (!this.state.redirectToReferrer) {
        return (<Redirect to={'/'}/>)
    }

    const { soalData, selectedNoSoal } = this.state;
    return (
    <div>
        <Menu />
        <div className="container">
            <br />
            <h2 align="center">No Soal : <font color="red"><strong>{this.props.match.params.kodesoal}</strong></font></h2>
            <br />
            <div className="row">
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9" align="center">
                    {/* <Soal /> */}
                    {selectedNoSoal !== null && <Soal day={this.state.selectedNoSoal} city="aku" />}
                </div> 
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" align="center">
                    <h6>Pilih No Soal</h6>
                    <Nosoal dataSoal={soalData}  onNoSoalClicked={this.onNoSoalClicked} />
                <br />
                </div>
            </div>
        </div>
    </div>
    )
}
}
