/* @flow */

import React from 'react';

type Props = {
  buttonType: ?string,
  buttonId: ?string,
  onAction: Function,
};


const ActionButton = (props: Props) => {
  var buttonTypeClass = props.buttonType === 'main' ? 'button-main' : 'button-sub';
  return (
    <button
      id={props.buttonId}
      className={buttonTypeClass}
      type="button"
    >{props.label}</button>);
}
export default ActionButton
