import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import Portfolio from 'views/Portfolio.js';
import Contact from 'views/Contact.js';
import Profile from 'views/Profile.js';

ReactDOM.render(
  
  <BrowserRouter>
 
    <Switch >
      <Route  path='/' exact render={(props) => <Profile {...props} />} />
      <Route
        path='/portfolio-page'
        render={(props) => <Portfolio {...props} />}
      />
      <Route
        path='/contact-page'
        render={(props) => <Contact {...props} />}
      />
    </Switch>

  </BrowserRouter>,

  document.getElementById('root')
);
