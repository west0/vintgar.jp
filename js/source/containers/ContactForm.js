import 'nodemailer';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { confirmContact, clearForm, updateMailAddrState, updateMessageState } from '../actions';
import ConfirmDialog from '../containers/ConfirmDialog';
import ClassNames from 'classnames';

class ContactForm extends Component {
  _onClear(e) {
    this.refs.contactMailAddr.value = '';
    this.refs.contactMessage.value = '';
    this.props.dispatch(clearForm());
  }
  
  _onConfirm(e) {
    this.props.dispatch(confirmContact(
      this.refs.contactMailAddr.value,
      this.refs.contactMessage.value
    ));
  }
  
  _renderDialog() {
    switch (this.props.state.contacts.contactState) {
      case 'confirm':
      case 'sending':
      case 'complete':
      case 'error':
        return (
          <ConfirmDialog />
        );
      
      default:
        return null;
    }
  }
  
  _checkValue(event) {
    let type = event.target.name;
    let val = event.target.value.trim();
    switch (type) {
      case ('contact-mail'):
        var mailAddrState = 'complete';
        if (val === '') {
          mailAddrState = 'null-error';
        } else if ((/[^\x01-\x7E\xA1-\xDF]/).test(val)) {
          mailAddrState = 'mb-error';
        }
        this.props.dispatch(updateMailAddrState(mailAddrState));
        return null;
        
      case ('contact-message'):
        var messageState = 'complete';
        if (val === '') {
          messageState = 'null-error'
        }
        this.props.dispatch(updateMessageState(messageState));
        return null;

      default:
        return null;
    }
  }
  
  
  
  render() {
    var inputState = this.props.state.inputs.isMailAddrNullError !== undefined || this.props.state.inputs.isMailAddrMbError !== undefined || this.props.state.inputs.isMessageNullError !== undefined ? true : false;

    var isMailAddrNullError = this.props.state.inputs.isMailAddrNullError === undefined ? true : this.props.state.inputs.isMailAddrNullError;
    var isMailAddrMbError = this.props.state.inputs.isMailAddrMbError === undefined ? false : this.props.state.inputs.isMailAddrMbError;
    var isMessageNullError = this.props.state.inputs.isMessageNullError === undefined ? true : this.props.state.inputs.isMessageNullError;
    
    var classNameForContactMailAddr = ClassNames({'form-err': false});
    var classNameForContactMessage = ClassNames({'form-err': false});
    var classNameForConfirmButton = ClassNames({'button-main': false, 'button-disabled': true});
    var isConfirmButtonDisabled = true;
    
    if (inputState) {
      if (isMailAddrNullError) {
        classNameForContactMailAddr = ClassNames({'form-err': true});
      }
      
      if (isMessageNullError) {
        classNameForContactMessage = ClassNames({'form-err': true});
      }
    }

    if (!isMailAddrNullError && !isMailAddrMbError && !isMessageNullError) {
      classNameForContactMailAddr = ClassNames({'form-err': false});
      classNameForContactMessage = ClassNames({'form-err': false});
      classNameForConfirmButton = ClassNames({
        'button-main': true,
        'button-disabled': false,
      });
      isConfirmButtonDisabled = false;
    }

    if (this.props.state.contacts.contactState === 'complete') {
      this.refs.contactMailAddr.value = '';
      this.refs.contactMessage.value = '';
    }

    return (
      <div id="contact-form" className="page-component">
        <form name="contact-form" onSubmit={e => {
          e.preventDefault();
        }}>
          <h3 className="page-title">contact form</h3>
          <div id="contact-notes">
            {/* <h5 id="contact-notes-title">ご注意事項</h5> */}
            <ul id="contact-note">
              <li>e-mail, messageに個人情報・機密情報を含まずにご連絡ください。</li>
              <li>Gmailが受信可能なメールアドレスをご入力ください。</li>
            </ul>
          </div>
          <p id="form-legends">*&nbsp;必須項目</p>
          <ul id="input-forms">
            <li>
              <input
                id="contact-mail"
                className={classNameForContactMailAddr}
                name="contact-mail"
                ref="contactMailAddr"
                maxLength="48"
                type="email"
                onChange={e => {
                  this._checkValue(e)
                }}
                onBlur={e => {
                  this._checkValue(e)
                }}
              />
              <label htmlFor="contact-mail">e-mail&nbsp;*</label>
              <p className="input-note">
                半角48文字
                {inputState && isMailAddrNullError ? <span className="input-err">&nbsp;必須項目です。</span> : null}
                {inputState && isMailAddrMbError ? <span className="input-err">&nbsp;半角で入力してください。</span> : null}
              </p>
            </li>
            <li>
              <textarea
                id="contact-message"
                className={classNameForContactMessage}
                name="contact-message"
                ref="contactMessage"
                maxLength="200"
                onChange={e => {
                  this._checkValue(e)
                }}
                onBlur={e => {
                  this._checkValue(e)
                }}
              />
              <label htmlFor="contact-message">message&nbsp;*</label>
              <p className="input-note">
                200文字
                {inputState && isMessageNullError ? <span className="input-err">&nbsp;必須項目です。</span> : null}
              </p>
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
              className={classNameForConfirmButton}
              ref="confirmButton"
              type="button"
              onClick={e => {
                this._onConfirm(e);
              }}
              disabled={isConfirmButtonDisabled}
            >CONFIRM</button>
          </div>
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

