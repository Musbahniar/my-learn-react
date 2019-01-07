import React, { Component } from 'react';
import Menu from '../../components/Header/Menu';
import { Redirect } from 'react-router-dom';
import { Card, Button, CardHeader,  CardBody, Table } from 'reactstrap';
import Soal from '../../components/cbt/Soal';
import NoSoal from '../../components/cbt/Nosoal';
import Nosoal from '../../components/cbt/Nosoal';
import './cbt.css';

export default class Mulaito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            weatherData: [],
            zipcode: '',
            city: {},
            dates: [],
            selectedDate: null
        };
        this.onDayClicked = this.onDayClicked.bind(this);
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json")
        .then(response => response.json())
        .then((data) => {
            this.setState({ weatherData: data });
        })
    }

    // componentDidMount() {
    //     fetch("https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json")
    //       .then(({ data: weatherData }) => {
    //         this.setState({ weatherData });
    //       });
    //   }

    componentWillMount(){
        if(sessionStorage.getItem('userData'))
        {
            let dataSession = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({redirectToReferrer: true});
        }
    }

    onDayClicked(dayIndex) {
        this.setState({ selectedDate: dayIndex });
        console.log('aa');
      }

render() {
    if (!this.state.redirectToReferrer) {
        return (<Redirect to={'/'}/>)
    }

    const { weatherData, dates, city, selectedDate } = this.state;
    // const weatherData = this.state.weatherData;
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
                    <Nosoal days={dates}  onDayClicked={this.onDayClicked} />
                <br />
                </div>
            </div>
        </div>
    </div>
    )
}
}
