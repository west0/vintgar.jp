/* @flow */

import React, {Component} from 'react';

type Props = {
  hoge: Array<Object>,
};

class GlobalNav extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (

<nav id="global-nav">
  <ul>
    <li onClick="">home</li>
    <li onClick="">profile</li>
    <li onClick="">works</li>
    <li onClick="">contact</li>
  </ul>
  <p>Global Navigation Component.</p>
</nav>

    );
  }
}

export default GlobalNav
