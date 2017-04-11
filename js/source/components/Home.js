/* @flow */

import React, {Component} from 'react';
import HomeMenu from './HomeMenu';

type Props = {
  hoge: Array<Object>,
};

class Home extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (

<div id="home" className="page-component">
  <div id="home-contents">
    <header>
      <h1>Let me drive your project!!</h1>
      <h2>Yoshiro Nishimura; Freelancer.</h2>
      <p id="lead">Freelance; Project Manager, Dev-Director, Business-Consaltant.</p>
    </header>
    <HomeMenu />
    <footer>
      <p>Tokyo, Japan.</p>
    </footer>
  </div>
</div>

    );
  }
}

export default Home
