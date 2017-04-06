/* @flow */

import React, {Component} from 'react';

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
      <div id="home">
        Home Component
      </div>
    );
  }
}

export default Home
