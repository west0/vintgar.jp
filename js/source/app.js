/* @flow */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import GlobalNav from './components/GlobalNav';
import Home from './components/Home';
import Profile from './components/Profile';
import Services from './components/Services';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';

ReactDOM.render(
  <div>
    <GlobalNav />
    <Home />
    <Profile />
    <Services />
    <Skills />
    <ContactForm />
    <p>scripts by app.js</p>
  </div>,
  document.getElementById('app')
);

/* */
