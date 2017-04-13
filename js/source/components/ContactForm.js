/* @flow */

import React, {Component} from 'react';
import FormInput from './FormInput';

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
      <form id="contact-form" className="page-component">
        <h3>Contact Form</h3>
        <FormInput />
        <FormInput />
        <p>If you will not get any replies in two days, send messages again.</p>
      </form>
    );
  }
}

export default ContactForm
