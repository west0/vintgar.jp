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
    <dt className="item-title">Name</dt>
    <dd className="item-value">Yoshiro Nishimura</dd>
    <dt className="item-title">Sex</dt>
    <dd className="item-value">Male</dd>
    <dt className="item-title">Age</dt>
    <dd className="item-value">30s</dd>
    <dt className="item-title">Live</dt>
    <dd className="item-value">Tokyo, Japan</dd>
  </dl>
</section>


    );
  }
}

export default Profile
