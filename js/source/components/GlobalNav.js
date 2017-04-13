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

<nav id="global-nav" className="page-component">
  <ul>
    <li onClick="#home"><a href="#home">home</a></li>
    <li onClick="#profile"><a href="#profile">services</a></li>
    <li onClick="#skills"><a href="#skills">skills</a></li>
    <li onClick="#contact-form"><a href="#contact-form">contact</a></li>
  </ul>
</nav>

    );
  }
}

export default GlobalNav
