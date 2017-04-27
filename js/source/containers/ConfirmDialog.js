import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cancelDialog, sendMail, dispError, completeInquiry, finishInquiry, clearInputState } from '../actions';


class ConfirmDialog extends Component {
  componentWillUnmount() {
    document.body.classList.remove('dialog-modal-open');
  }
  
  componentDidMount() {
    if (this.props.state.contacts.contactState === 'confirm') {
      document.body.classList.add('dialog-modal-open');
    }
  }
  
  _onCancel(e) {
    this.props.dispatch(cancelDialog(
      this.props.state.contacts.contactMailAddr,
      this.props.state.contacts.contactMessage
    ));
  }
  
  _onSend(e) {
    this.props.dispatch(sendMail(
      this.props.state.contacts.contactMailAddr,
      this.props.state.contacts.contactMessage
    ));
  }
  
  EncodeHTMLForm(data) { // encode post parameter
    var params = [];
    for ( var name in data ) {
      var value = data[ name ];
      var param = encodeURIComponent( name ) + '=' + encodeURIComponent( value );
      params.push( param );
    }
    return params.join( '&' ).replace( /%20/g, '+' );
  }
  
  _sendMail(contactMailAddr, contactMessage) {
    new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.onload = function () {
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      }
      request.onerror = function () {
        reject(new Error(`XMLHttpRequest Error: ${this.statusText}`));
      }
      request.open('POST', './mail.cgi', true);
      request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
      request.responseType = 'json';
      request.send(this.EncodeHTMLForm({
        mailAddr: contactMailAddr,
        message: contactMessage,
      }));
    }).then(
      (data) => {
        this.props.dispatch(completeInquiry());
      }
    ).catch(() => {
      this.props.dispatch(dispError(
        contactMailAddr,
        contactMessage
      ));
    });
  }
  
  _onClose(e) {
    this.props.dispatch(clearInputState());
    this.props.dispatch(finishInquiry());
  }
  
  _createDialog(contactState) {
    switch (contactState) {
      case 'sending':
        this._sendMail(
          this.props.state.contacts.contactMailAddr,
          this.props.state.contacts.contactMessage
        );
        return this._renderDialog(contactState);
      
      default:
        return this._renderDialog(contactState);
    }
  }
  
  _renderDialog(contactState) {
    switch (contactState) {
      case ('sending') :
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
        return (
          <div>
            <div className="dialog-header">
              <div className="close-button"
                onClick={e => {
                  this._onCancel(e);
                }}
              >X</div>
            </div>
            <p className="dialog-description">お問い合わせを送信しました。<br/>2営業日以内に返信がない場合は、恐れ入りますが再度お問い合わせください。</p>
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
                : <p className="dialog-description">以下の内容で送信します。</p>
              }
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

