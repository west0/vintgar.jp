/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { confirmContact, clearForm } from '../actions';
import ContactForm from '../components/ContactForm';


let FormButtons = ({ dispatch }) => {
  return (
    <div id="form-buttons">
      <button
        id="button-clear"
        className="button-sub"
        type="button"
        onClick={e => {
          e.preventDefault();
          console.log(ReactDOM.findDOMNode(ContactForm.refs.contactMail).value);
          dispatch(clearForm());
        }}
      >CLEAR</button>
      <button
        id="button-submit"
        className="button-main"
        type="button"
        onClick={e => {
          e.preventDefault();
          console.log('click-send');
          dispatch(confirmContact({/*
            ReactDOM.findDOMNode(this.refs.contactName).value,
            ReactDOM.findDOMNode(this.refs.contactMail).value,
            ReactDOM.findDOMNode(this.refs.contactMessage).value
          */}));
        }}
      >SEND</button>
    </div>
  );
}

FormButtons = connect()(FormButtons);

export default FormButtons

