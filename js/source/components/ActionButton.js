/* @flow */

import React from 'react';

type Props = {
  className: ?string,
};


const ActionButton = (props: Props) => {
  var buttonTypeClass = props.buttonType === 'main' ? 'button-main' : 'button-sub';
  return (<button id={props.buttonId} className={buttonTypeClass}>{props.label}</button>);
}
export default ActionButton
