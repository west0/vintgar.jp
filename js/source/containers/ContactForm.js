/* @flow */

import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { confirmContact, clearForm } from '../actions';
import ConfirmDialog from '../containers/ConfirmDialog';


class ContactForm extends Component {
  _onClear(e) {
//    console.log(this.refs.contactName.value ? this.refs.contactName.value : 'onClear()');
    this.refs.contactName.value = '';
    this.refs.contactMailAddr.value = '';
    this.refs.contactMessage.value = '';
    this.props.dispatch(clearForm());
  }
  
  _onConfirm(e) {
//    console.log('onConfirm()');
    this.props.dispatch(confirmContact(
      '(名前は表示されません)',
      this.refs.contactMailAddr.value,
      this.refs.contactMessage.value
    ));
  }
  
  _renderDialog() {
//    console.log('state: ' + this.props.state.contacts.contactState);
    switch (this.props.state.contacts.contactState) {
      case 'confirm':
      case 'error':
//        console.log('_renderDialog.CONFIRM');
        return (
          <ConfirmDialog />
        );
      
      default:
//        console.log('_renderDialog.default');
        return null;
    }
  }
  
  
  render() {
    return (
      <div id="contact-form" className="page-component">
        <form name="contact-form" onSubmit={e => {
          e.preventDefault();
        }}>
          <h3 className="page-title">Contact Form</h3>
          <div id="contact-notes">
            {/* <h5 id="contact-notes-title">ご注意事項</h5> */}
            <ul id="contact-note">
              <li>e-mail, messageに個人情報・機密情報を含まずにご連絡ください。</li>
              <li>Gmailが受信可能なメールアドレスをご入力ください。</li>
            </ul>
          </div>
          <p id="form-legends">*&nbsp;必須項目</p>
          <ul id="input-forms">
            {/*
              <li>
              <input id="contact-name" ref="contactName" maxLength="24" type="text" />
              <label htmlFor="contact-name">name&nbsp;*</label>
              <p className="input-note">24文字</p>
            </li>
            */}
            <li>
              <input id="contact-mail" ref="contactMailAddr" maxLength="48" type="email" />
              <label htmlFor="contact-mail">e-mail&nbsp;*</label>
              <p className="input-note">半角48文字</p>
            </li>
            <li>
              <textarea id="contact-message" ref="contactMessage" maxLength="256" />
              <label htmlFor="contact-message">message&nbsp;*</label>
              <p className="input-note">128文字</p>
            </li>
          </ul>
          {/* Todo: checkbox (個人情報を含まない) */}
          <div id="form-buttons">
            <button
              id="button-clear"
              className="button-sub"
              type="button"
              onClick={e => {
                this._onClear(e);
              }}
            >CLEAR</button>
            <button
              id="button-submit"
              className="button-main"
              type="button"
              onClick={e => {
                this._onConfirm(e);
              }}
            >CONFIRM</button>
          </div>
          <p>If you will not get any replies in two days, send messages again.</p>
        </form>
        {this._renderDialog()}
      </div>

    );    
  }
}

let selector = (state) => {
  return {state: state};
}

export default connect(selector)(ContactForm)

