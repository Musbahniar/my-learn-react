import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Welcome from '././components/Welcome/Welcome';
import Info from '././components/Info/Info';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';

import Vtutor from '././components/Vtutor/Vtutor';
import Vak from '././components/Akademik/Vak';
import Cbt from '././components/Akademik/Cbt';
import Cbtdetail from '././components/Akademik/Cbtdetail';

import NotFound from '././components/NotFound/NotFound';


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Home}/>
          <Route path="/info" component={Info} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/vak" component={Vak} />
          <Route path="/cbt" component={Cbt} />
          <Route path="/tutor" component={Vtutor} />
          <Route path="/dcbt" component={Cbtdetail} />
          <Route path="*" component={NotFound}/> */}
      </Switch>
  </BrowserRouter>
);

export default Routes;