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
import Kuis from '././components/Akademik/Kuis';
import Presensi from '././components/Akademik/Presensi';
import ToCbt from '././components/cbt/Tocbt';
import Tryout from '././components/cbt/Mulaito';
import NoSoal from '././components/cbt/Nosoal';

import Kontak from '././components/Kontak/Kontak';

import NotFound from '././components/NotFound/NotFound';

const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Home}/>
          <Route path="/info" component={Info} />
          <Route path="/kontak" component={Kontak} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/vak" component={Vak} />
          <Route path="/cbt" component={Cbt} />
          <Route path="/tocbt" component={ToCbt} />
          <Route path="/tryout/:kodesoal" component={() => <Tryout />} />
          <Route path="/dcbt/:pola/:periode" component={Cbtdetail} />
          <Route path="/kuis" component={Kuis} />
          <Route path="/presensi" component={Presensi} />
          <Route path="/tutor" component={Vtutor} />
          <Route path="*" component={NotFound}/>
      </Switch>

  </BrowserRouter>
);

export default Routes;