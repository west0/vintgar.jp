/* @flow */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import Profile from './components/Profile'
import ContactForm from './components/ContactForm'

ReactDOM.render(
  <div>
    <Home />
    <Profile />
    <ContactForm />
    <p>scripts by app.js</p>
  </div>,
  document.getElementById('app')
);

/* */
