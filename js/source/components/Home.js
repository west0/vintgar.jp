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

<div id="home" className="root-component">
  <div id="home-contents">
    <header>
      <h1>そのプロジェクト、お手伝いします。</h1>
      <h2>西村ヨシロウ: フリーランス</h2>
      <p id="lead">プロジェクトマネジメント, 開発ディレクション, ビジネスコンサルティング, etc.</p>
    </header>
    <HomeMenu />
  </div>
</div>

    );
  }
}

export default Home
