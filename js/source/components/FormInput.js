/* @flow */

import React, {Component} from 'react';


type FormInputFieldType = 'name' | 'mail' | 'message';

export type FormInputFieldValue = string;

export type FormInputField = {
  type: FormInputFieldType,
  defaultValue?: FormInputFieldValue,
  id?: string,
  formId: string,
  options?: Array<string>,
  label?: string,
  maxLength: number,
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
        return <input {...common} id={this.props.formId} ref={this.props.formRef} type="text" />;
        
      case 'mail':
        return <input {...common} id={this.props.formId} ref={this.props.formRef} type="email" autoComplete="on" />;
        
      case 'message':
        return <textarea {...common} id={this.props.formId} ref={this.props.formRef} />;

      default:
        return null;
    }
  }
}

export default FormInput
