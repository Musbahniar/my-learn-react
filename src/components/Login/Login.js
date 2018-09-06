import React, {Component} from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import Header from '../../components/Header/Header';

class Login extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     siapa: 'SISWA',
     email: '',
     password: '',
     redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  login(){
      if (this.state.siapa && this.state.email && this.state.password)
      {
        PostData('login',this.state).then((result) => {
          if(result.length > 0)
          {
            sessionStorage.setItem('userData',JSON.stringify(result));
            this.setState({redirectToReferrer: true});
            // console.log('ada');
          }
          else
          {
            console.log('tidak ada');
          }
        });
      }
      else
      {
        console.log('invalid');
      }
  }

  handleChange(e){
    this.setState({[e.target.name]:e.target.value});
   }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/home'}/>)
    }

    return (
      <div>
        <Header />
        <div className="container" align="center"> 
        <br />
        <h2 align="center">Login <font color="red">GOLearn</font></h2>
        <p align="center">Selamat datang di layanan ini.Fasilitas ini merupakan salah satu bentuk Informasi Pelayanan yang ditujukan kepada Orangtua dan Siswa/i GANESHA OPERATION, dan diharapkan seluruh Jajaran Orangtua dan Siswa/I dapat memperoleh informasi dengan mudah melalui fasilitas yang disediakan ini. </p>
        <br />
      <Form>
      <div className="col-md-6 col-md-offset-3">
        <FormGroup>
          <Label for="exampleEmail"><strong>Pilih Salah Satu</strong></Label>
          <select className="form-control"
          type="text"
          name="siapa"
          ref="siapa"
          value={ this.state.siapa } 
          onChange={ this.handleChange }
          required >
                <option value="SISWA">Sebagai Siswa/I</option>
                <option value="ORTU">Sebagai Orangtua</option>
                <option value="PENGAJAR">Sebagai Pengajar</option>
            </select>
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword"><strong>Email</strong></Label>
            <input className="form-control"
            type="email"
            name="email"
            ref="email"
            value={ this.state.email } 
            onChange={ this.handleChange }
            required />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword"><strong>Password</strong></Label>
            <input className="form-control"
            type="password" 
            name="password"
            ref="password"
            value={ this.state.password } 
            onChange={ this.handleChange }
            pattern=".{5,}"
            required />
        </FormGroup>

        <Button onClick={this.login}>Login</Button>
        <hr/>
  
        <div className="checkbox">
          <label>
          <em><a href="/signup">Belum Registrasi</a> - <a href="/">Lupa Password</a></em>
          </label>
          </div>
        </div>
      </Form>
      </div>
      </div>
    );
  }
}

export default Login;