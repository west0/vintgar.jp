/* @flow */

import React, {Component} from 'react';


type FormInputFieldType = 'name' | 'mail' | 'body';

export type FormInputFieldValue = string;

export type FormInputField = {
  type: FormInputFieldType,
  defaultValue?: FormInputFieldValue,
  id?: string,
  options?: Array<string>,
  label?: string,
};

class FormInput extends Component {
  
  props: FormInputField;

  static defaultProps = {
    type: 'input',
  };

  getValue(): FormInputFieldValue {
    return 'value' in this.refs.input
      ? this.refs.input.value
      : this.refs.input.getValue();
  }

  render() {
    const common: Object = {
      id: this.props.id,
      ref: 'input',
      defaultValue: this.props.defaultValue,
    };
    switch (this.props.type) {
      case 'name':
        return <input {...common} type="text" />;
        
      case 'mail':
        return <input {...common} type="text" />;
        
      case 'body':
        return <textarea {...common} />;

      default:
        return <input {...common} type="text" />;
    }
  }
}

export default FormInput
