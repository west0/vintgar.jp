/* @flow */

import React, {Component} from 'react';

type Props = {
  hoge: Array<Object>,
};

class ContactForm extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div id="profile">
        ContactForm Component
      </div>
    );
  }
}

export default ContactForm
