import React, {Component} from 'react';
import {Link} from 'react-scroll';


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
    <li>&gt;&nbsp;<Link className="homemenu-link" to="services" spy={true} smooth={true} duration={500}>services</Link></li>
    <li>&gt;&nbsp;<Link className="homemenu-link" to="skills" spy={true} smooth={true} duration={500}>skills</Link></li>
    <li>&gt;&nbsp;<Link className="homemenu-link" to="contact-form" spy={true} smooth={true} duration={500}>contact</Link></li>
  </ul>
</nav>

    );
  }
}

export default HomeMenu
