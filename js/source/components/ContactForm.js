/* @flow */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
            <input id="contact-name" ref="contactName" maxLength="24" type="text" />
            <label htmlFor="contact-name">name&nbsp;*</label>
            <p className="contact-note">24文字</p>
          </li>
          <li>
            <input id="contact-mail" ref="contactMail" maxLength="48" type="email" />
            <label htmlFor="contact-mail">e-mail&nbsp;*</label>
            <p className="contact-note">半角48文字</p>
          </li>
          <li>
            <textarea id="contact-message" ref="contactMessage" maxLength="256" />
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
              e.preventDefault();
              console.log(ReactDOM.findDOMNode(this.refs.contactName).value);
            }}
          >CLEAR</button>
          <button
            id="button-submit"
            className="button-main"
            type="button"
            onClick={e => {
              e.preventDefault();
              console.log(ReactDOM.findDOMNode(this.refs.contactMail).value);
            }}
          >SEND</button>
        </div>
        <p>If you will not get any replies in two days, send messages again.</p>
      </form>
    );
  }
}

export default ContactForm
