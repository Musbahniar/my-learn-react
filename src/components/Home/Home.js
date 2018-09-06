import React from 'react';
import {Redirect} from 'react-router-dom';
import pic1 from '../../assets/1.png';
import Menu from '../../components/Header/Menu';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          redirectToReferrer: false,
          userSession: '',
          nis: '',
          namalengkap: ''
        };
      }

    componentWillMount() {
        if(sessionStorage.getItem('userData'))
        {
            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({redirectToReferrer: true});
            // console.log(data);
            let dataNamaLengkap = data.map(officer => officer.cNamaLengkap);
            this.setState({namalengkap: dataNamaLengkap});
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
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <h3 className="intro text-left">
                        <font color="red"><strong>Ganesha Operation</strong></font>
                        </h3>
                        <p className="sub-heading text-left">
                        <font color="black"><strong>Selamat datang, {this.state.namalengkap}</strong></font> 
                        <br/>
                        <font color="red"><strong>GOLearn </strong> </font>
                        <font color="black">
                        merupakan perangkat lunak yang dikembangkan oleh Ganesha Operation untuk melatih siswa/i nya mengerjakan soal-soal secara online sehingga siswa/i terbiasa mengerjakan ujian secara Computer Based Test (CBT).                                   
                            </font>
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
				<div className="home-screenshot side-screenshot pull-left">
					<img src={pic1} alt="Feature" className="img-responsive" />
				</div>
			</div>
            </div>
            </div>
        );
        }
  }

  export default Home;