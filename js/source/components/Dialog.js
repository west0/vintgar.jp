/* @flow */

import ActionButton from './ActionButton';
import React, {Component} from 'react';

type Props = {
  dialogId: ?string,
  contactName: ?string,
  contactMail: ?string,
  contactMessage: ?string,
};

class Dialog extends Component {

  props: Props;
  
  static defaultProps = {
    dialogId: 'contact-confirm-dialog',
    contactName: 'no-name',
    contactMail: 'no-mail',
    contactMessage: 'no-message',
  };
  
  componentWillUnmount() {
    document.body.classList.remove('DialogModalOpen');
  }
  
  componentDidMount() {
    if (this.props.modal) {
      document.body.classList.add('DialogModalOpen');
    }
  }
  
  render() {
    return (
      <div id={this.proprs.contactId}>
        <ActionButton
          buttonId="button-clear"
          buttonType="sub"
          onAction={(_) => {
            console.log('click_cancel')
          }}
          label="CANCEL"
        />
        <ActionButton
          buttonId="button-clear"
          buttonType="main"
          onAction={(_) => {
            console.log('click_send')
          }}
          label="SEND"
        />
      {/*
        <div className={this.props.modal ? 'DialogModalWrap' : null}>
          <div className="DialogHeader">{this.props.header}</div>
          <div className="DialogBody">{this.props.children}</div>
          <div className="DialogFooter">
            {this.props.hasCancel
              ? <span 
                  className="DialogDismiss"
                  onClick={this.props.onAction.bind(this, 'dismiss')}>
                  Cancel
                </span>
              : null
            }
            <Button onClick={this.props.onAction.bind(this, 
                this.props.hasCancel ? 'confirm' : 'dismiss')}>
              {this.props.confirmLabel}
            </Button>
          </div>
        </div>
        */}
      </div>
    );
  }
}

export default Dialog
