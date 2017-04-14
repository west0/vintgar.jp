/* @flow */

import React from 'react';
import classNames from 'classnames';

type Props = {
  className: ?string,
};


const ActionButton = (props: Props) => 
  <button id={props.buttonId} className={classNames('Button', props.className)}>{props.label}</button>

export default ActionButton
