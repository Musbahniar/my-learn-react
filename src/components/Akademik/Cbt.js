import React from 'react';
import Menu from '../../components/Header/Menu';
import { GetData } from '../../services/GetData';
import {Redirect} from 'react-router-dom';
import Cbttabel from '../../components/Akademik/Cbttabel';

class Cbt extends React.Component {
  constructor () {
    super();
    this.state ={
      data: '',
      dataCBT: [],
      redirectToReferrer: false
    };
  }

  componentWillMount(){
    if(sessionStorage.getItem('userData'))
    {
        let dataSession = JSON.parse(sessionStorage.getItem("userData"));
        this.setState({redirectToReferrer: true});

        let dataNIS = dataSession[0]['cNIS'];
        // console.log(dataNIS);
        var replacedNIS = dataNIS.split(' ').join('');
        this.getInfoCBT(replacedNIS);
    }
  }

  getInfoCBT(param){
    GetData('To/get_byCBT/'+param).then((result) => {
      let responseJson = result;
      this.setState({dataCBT: responseJson});
      console.log(this.state.dataCBT);
    });
  }
  
    render() { 
      if (!this.state.redirectToReferrer) {
        return (<Redirect to={'/'}/>)
      }

      const infoData = this.state.dataCBT;
      if (infoData.length > 0) 
      {
        return (
          <div>
            <div>
              <Menu />
              <div className="container" align="center">
                <br />
                <h2 align="center">GOLearn <font color="red">Nilai TO CBT</font></h2>
                <br />
                <Cbttabel dataCBT={infoData}/>
              </div>
            </div>
          </div>
        );
      }
      else
      {
        return (
          <div>
            <div>
              <Menu />
              <div className="container" align="center">
                <br />
                <h2 align="center">GOLearn <font color="red">Nilai TO CBT</font></h2>
                <div className="sub-heading">
                  <h3 align='center'>Untuk sementara hasil tryout cbt belum dapat kami upload.</h3>
			            <h3 align='center'>Mohon maaf atas ketidaknyamanan ini.</h3><br/><br/><br/><br/>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }

  export default Cbt;