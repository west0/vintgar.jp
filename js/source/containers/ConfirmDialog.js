/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cancelDialog, sendMail } from '../actions';


class ConfirmDialog extends Component {
  componentWillUnmount() {
    console.log('remove_dialog-modal-open')
    document.body.classList.remove('dialog-modal-open');
  }
  
  componentDidMount() {
    console.log('componentDidMount')
    if (this.props.state.contacts.contactState === 'confirm') {
      console.log('add_dialog-modal-open')
      document.body.classList.add('dialog-modal-open');
    }
  }
  
  _onCancel(e) {
    this.props.dispatch(cancelDialog());
  }
  
  _onSend(e) {
    this.props.dispatch(sendMail(
      this.props.state.contacts.contactName,
      this.props.state.contacts.contactMailAddr,
      this.props.state.contacts.contactMessage
    ));
  }
  
  _renderDialog() {
    switch (this.props.state.contacts.contactState) {
      case 'complete':
        return this._renderConfirmDialog();
      
      default:
        return this._renderConfirmDialog(this.props.state.contacts.contactState);
    }
  }
  
  _renderConfirmDialog(contactState) {
    return (
      <form id="confirm-dialog" className="dialog-modal"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div>
          <div className="dialog-header">
            <div className="close-button"
              onClick={e => {
                this._onCancel(e);
              }}
            >X</div>
          </div>
          {contactState === 'error'
            ? <p className="dialog-description dialog-error-message">送信時にエラーが発生しました。再度送信ボタンをクリックいただくか、しばらく待ってから再度お試しください。</p>
            : null
          }
          <p className="dialog-description">以下の内容で送信します。</p>
          <dl className="dialog-contents">
          {/*
            <dt>name</dt>
            <dd>{this.props.state.contacts.contactName}</dd>
          */}
            <dt>e-mail</dt>
            <dd>{this.props.state.contacts.contactMailAddr}</dd>
            <dt>message</dt>
            <dd className="dialog-message">{
              /*this.props.state.contacts.contactMessage*/
              this.props.state.contacts.contactMessage.split('\n').map((m,idx) => (<p key={idx}>{m}</p>))
            }</dd>
          </dl>
        </div>
        <div className="dialog-buttons">
          <button
            id="button-cancel"
            className="button-sub"
            type="button"
            onClick={e => {
              this._onCancel(e);
            }}
          >CANCEL</button>
          <button
            id="button-send"
            className="button-main"
            type="button"
            onClick={e => {
              this._onSend(e);
            }}
          >SEND</button>
        </div>
      </form>
    );
  }
  
  render() {
    return (
      <div className="dialog-container">
        {this._renderDialog()}
      </div>
    );
  }
}

let selector = (state) => {
  return {state: state};
}

export default connect(selector)(ConfirmDialog)

