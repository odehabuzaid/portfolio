import React from 'react';
import ReactDOM from 'react-dom';
import {   BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter } from 'react-router-dom';

import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import Portfolio from 'views/Portfolio.js';
import Contact from 'views/Contact.js';
import Profile from 'views/Profile.js';

import { TransitionGroup, CSSTransition } from 'react-transition-group';


const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames='fade' timeout={200}>
      <Switch location={location}>
        <Route path='/' component={(props) => <Profile {...props} />} exact />
        <Route
          path='/portfolio-page'
          component={(props) => <Portfolio {...props} />}
        />
        <Route
          path='/contact-page'
          component= {(props) => <Contact {...props} />}
        />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

ReactDOM.render(
  <BrowserRouter>
    <AnimatedSwitch />
  </BrowserRouter>,
  document.getElementById('root')
);
