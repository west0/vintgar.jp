/* @flow */

import React, {Component} from 'react';

type Props = {
  hoge: Array<Object>,
};

class Profile extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (

<section id="profile" className="page-component profile-section">
  <h3>profile</h3>
  <dl id="biography-list">
    <dt className="item-title">name</dt>
    <dd className="item-value">西村 ヨシロウ</dd>
    <dt className="item-title">sex</dt>
    <dd className="item-value">男性</dd>
    <dt className="item-title">age</dt>
    <dd className="item-value">30代</dd>
    <dt className="item-title">place</dt>
    <dd className="item-value">東京近郊(遠方は応相談)</dd>
  </dl>
</section>


    );
  }
}

export default Profile
