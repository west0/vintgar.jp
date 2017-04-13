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
    <Home />
    <div id="main-contents" className="root-component">
      <Profile />
      <Services />
      <Skills />
      <ContactForm />
    </div>
    <GlobalNav />
  </div>,
  document.getElementById('app')
);

/* */
