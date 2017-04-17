/* @flow */

import React, {Component} from 'react';
//import { confirmContact, clearForm } from '../action';
import FormInput from './FormInput';
import Dialog from './Dialog';

type Props = {
  hoge: Array<Object>,
};

class ContactForm extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }
  
  _renderDialog() {
    console.log('_renderDialog()');
    return (
      <Dialog
        contactId="contact-confirm-dialog"
        contactName={null}
        contactMail={null}
        contactMessage={null}
      />
    );
  }
  
  _clearForm() {
    console.log('_clearForm()');
    return (null);
  }
  
  
  render() {
    return (
      <form id="contact-form" name="contact-form" className="page-component" onSubmit={e => {
        e.preventDefault();
      }}>
        <h3 className="page-title">Contact Form</h3>
        <p id="form-legends">*&nbsp;必須項目</p>
        <ul id="contact-forms">
          <li>
            <FormInput formId="contact-name" type="name" max-length="24" label="name" />
            <label htmlFor="contact-name">name&nbsp;*</label>
            <p className="contact-note">24文字</p>
          </li>
          <li>
            <FormInput formId="contact-mail" type="mail" max-lenght="48" label="e-mail" />
            <label htmlFor="contact-mail">e-mail&nbsp;*</label>
            <p className="contact-note">半角48文字</p>
          </li>
          <li>
            <FormInput formId="contact-message" type="message" max-length="256" label="" />
            <label htmlFor="contact-message">message&nbsp;*</label>
            <p className="contact-note">128文字</p>
          </li>
        </ul>
        <div id="form-buttons">
          <button
            id="button-clear"
            className="button-sub"
            type="button"
            onClick={e => {
              console.log('click-send-button');
            }}
          >CLEAR</button>
          <button
            id="button-submit"
            className="button-main"
            type="button"
            onClick={e => {
              alert('click-send-button');
              console.log('click-send-button');
            }}
          >SEND</button>
        </div>
        <p>If you will not get any replies in two days, send messages again.</p>
      </form>
    );
  }
}

export default ContactForm
