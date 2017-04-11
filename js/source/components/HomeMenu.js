/* @flow */

import React, {Component} from 'react';

type Props = {
  hoge: Array<Object>,
};

class HomeMenu extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (

<nav id ="home-menu">
  <ul>
    <li><a href="#profile">About me</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#skills">Skills</a></li>
  {/*  <li><a href="works">Works</a></li> */}
    <li><a href="#contact-form">Contact</a></li>
  </ul>
</nav>

    );
  }
}

export default HomeMenu
