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
      <div id="profile">
        Profile Component
      </div>
    );
  }
}

export default Profile
