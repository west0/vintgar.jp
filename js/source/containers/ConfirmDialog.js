/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cancelDialog, sendMail, dispError, completeInquiry, finishInquiry } from '../actions';


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
    console.log('ConfirmDialog._onCancel()');
    this.props.dispatch(cancelDialog(
      this.props.state.contacts.contactMailAddr,
      this.props.state.contacts.contactMessage
    ));
  }
  
  _onSend(e) {
    console.log('ConfirmDialog._onSend()');
    this.props.dispatch(sendMail(
      this.props.state.contacts.contactMailAddr,
      this.props.state.contacts.contactMessage
    ));
  }
  
  EncodeHTMLForm(data) { // encode post parameter
    console.log('EncodeHTMLForm()');
    var params = [];
    for ( var name in data ) {
      var value = data[ name ];
      var param = encodeURIComponent( name ) + '=' + encodeURIComponent( value );
      params.push( param );
    }
    return params.join( '&' ).replace( /%20/g, '+' );
  }
  
  _sendMail(contactMailAddr, contactMessage) {
    console.log('ConfirmDialog._sendMail()');
    
    new Promise((resolve, reject) => {
      console.log('Promise()');
      const request = new XMLHttpRequest();
      request.onload = function () {
        console.log('request.onload()');
        if (this.status === 200) {
          console.log('status === 200');
          console.log('data: ' + JSON.stringify(this.response));
          resolve(this.response);
        } else {
          console.log('status !== 200');
          reject(new Error(this.statusText));
        }
      }
      request.onerror = function () {
        console.log('onerror()');
        reject(new Error(`XMLHttpRequest Error: ${this.statusText}`));
      }
      request.open('POST', './mail.py', true);
      console.log('request.open()_complete');
      request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
      console.log('request.setRequestHeader()_complete');
      request.responseType = 'json';
      console.log('request.responseType_complete');
      request.send(this.EncodeHTMLForm({
        mailAddr: contactMailAddr,
        message: contactMessage,
      }));
      console.log('request.send()_complete');
    }).then(
      (data) => {
        console.log('promise complete: ' + Object.keys(data).length);
        console.log('promise complete: ' + JSON.stringify(data));
        this.props.dispatch(completeInquiry());
      }
    ).catch(() => {
      console.log('promise error: ');
      this.props.dispatch(dispError(
        contactMailAddr,
        contactMessage
      ));
    });
  }
  
  _onClose(e) {
    console.log('ConfirmDialog._onClose()');
    
    this.props.dispatch(finishInquiry());
  }
  
  _createDialog(contactState) {
    console.log('ConfirmDialog._createDialog');
    switch (contactState) {
      case 'sending':
        console.log('ConfirmDialog._createDialog > contactState > sending');
        this._sendMail(
          this.props.state.contacts.contactMailAddr,
          this.props.state.contacts.contactMessage
        );
        console.log('_sendMail()_after');
        return this._renderDialog(contactState);
      
      default:
        console.log('ConfirmDialog._createDialog > contactState > default: ' + contactState);
        return this._renderDialog(contactState);
    }
  }
  
  _renderDialog(contactState) {
    console.log('_renderDialog()');
    switch (contactState) {
      case ('sending') :
        console.log('ConfirmDialog._renderDialog > sending');
        return (
          <div>
            <div className="dialog-header">
              <div className="close-button">&nbsp;</div>
            </div>
            <p className="dialog-description">送信しています。</p>
            <div className="dialog-loading">
              <img src="images/loading.svg" alt="送信中" />
            </div>
          </div>
        );
      
      case ('complete') :
        console.log('ConfirmDialog._renderDialog > finish');
        return (
          <div>
            <div className="dialog-header">
              <div className="close-button"
                onClick={e => {
                  this._onCancel(e);
                }}
              >X</div>
            </div>
            <p className="dialog-description">お問い合わせを送信しました。</p>
            <div className="dialog-buttons">
              <button
                id="button-send"
                className="button-main"
                type="button"
                onClick={e => {
                  this._onClose(e);
                }}
              >CLOSE</button>
            </div>
          </div>
        );
      
      default: // contactState: confirm
        console.log('ConfirmDialog._renderDialog > default: ' + contactState + ' / ' + this.props.state.contacts.isSendError);
        return (
          <form 
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
              {this.props.state.contacts.isSendError === true
                ? <p className="dialog-description dialog-error-message">送信できませんでした。再度送信ボタンをクリックいただくか、リロードして再度お試しください。</p>
                : null
              }
              <p className="dialog-description">以下の内容で送信します。</p>
              <dl className="dialog-contents">
                <dt>e-mail</dt>
                <dd>{this.props.state.contacts.contactMailAddr}</dd>
                <dt>message</dt>
                <dd className="dialog-message">{
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
  }
  
  render() {
    return (
      <div className="dialog-container">
        <div className="dialog-base">
          {this._createDialog(this.props.state.contacts.contactState)}
        </div>
      </div>
    );
  }
}

let selector = (state) => {
  return {state: state};
}

export default connect(selector)(ConfirmDialog)

