/* @flow */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import GlobalNav from './components/GlobalNav';
import Home from './components/Home';
import Profile from './components/Profile';
import ContactForm from './components/ContactForm';

ReactDOM.render(
  <div>
    <GlobalNav />
    <Home />
    <Profile />
    <ContactForm />
    <p>scripts by app.js</p>
  </div>,
  document.getElementById('app')
);

/* */
