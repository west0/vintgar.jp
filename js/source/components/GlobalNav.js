/* @flow */

import React, {Component} from 'react';
import {Link} from 'react-scroll';
import Headroom from 'react-headroom';

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

<Headroom id="global-nav" className="page-component">
  <ul>
    <li><Link className="global-link" to="home" spy={true} smooth={true} duration={500}>home</Link></li>
    <li><Link className="global-link" to="services" spy={true} smooth={true} duration={500}>services</Link></li>
    <li><Link className="global-link" to="skills" spy={true} smooth={true} duration={500}>skills</Link></li>
    <li><Link className="global-link" to="contact-form" spy={true} smooth={true} duration={500}>contact</Link></li>
  </ul>
</Headroom>

    );
  }
}

export default GlobalNav
