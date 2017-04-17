/* @flow */

'use strict';

import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalNav from './components/GlobalNav';
import Home from './components/Home';
import Profile from './components/Profile';
import Services from './components/Services';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import { vintgarApp } from './reducers';

let store = createStore(vintgarApp);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Home />
      <div id="main-contents" className="root-component">
        <Profile />
        <Services />
        <Skills />
        <ContactForm />
      </div>
      <GlobalNav />
    </div>
  </Provider>,
  document.getElementById('app')
);

/* */
