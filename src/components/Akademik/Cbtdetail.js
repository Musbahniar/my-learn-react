import React from 'react';
import Menu from '../../components/Header/Menu';
import {Redirect} from 'react-router-dom';
import { GetData } from '../../services/GetData';

class Cbtdetail extends React.Component {

    constructor(props){
        super(props);

        this.state ={
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
        
          var replacedNIS = dataNIS.split(' ').join('');
          this.getInfoTODetail(replacedNIS);
      }
    }
    
    getInfoTODetail(param){
      GetData('To/getDetail_byCBT/'+param+'/'+this.props.match.params.pola+'/'+this.props.match.params.periode).then((result) => {
        let responseJson = result;
        this.setState({dataCBT: responseJson});
        console.log(this.state.dataCBT);
      });
    }

    render() {
      if (!this.state.redirectToReferrer) {
        return (<Redirect to={'/'}/>)
      }

      var rows = this.state.dataCBT.map( (obj, i) => {
        return (
          <tr>
            <td>{i+1}</td>
            <td>{obj.Mapel}</td>
            <td align="center">{obj.Benar}</td>
            <td align="center">{obj.Salah}</td>
            <td align="center">{obj.Kosong}</td>
            <td align="center">{this.props.match.params.pola==='UN' || this.props.match.params.pola==='ULUM' ? Number(obj.NILAI).toFixed(2): Number(obj.PG).toFixed(2)}</td>
          </tr>
        );
    })

        return (
         <div>
            <Menu />
            <div className="container" align="center">
              <br />
              <h2 align="center">GOLearn <font color="red">Nilai TO CBT</font></h2>
              <br />
              <div className="table-responsive-sm">
                <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mata Pelajaran</th>
                    <th align="center">Benar</th>
                    <th align="center">Salah</th>
                    <th align="center">Kosong</th>
                    <th align="center">Nilai</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
		            </table>
              </div>
            </div>
          </div>
        );
      }
  }

  export default Cbtdetail;