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

<div id="profile" className="page-component">
  <section id="biography" className="profile-section">
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

  <section id="services" className="profile-section">
    <h3>service</h3>
    <div><img id="service-img" src="images/service.png" alt="project management, dev-direction, business-consulting" /></div>
    <p>
      フリーランスでプロジェクト推進をお手伝いしています。<br />主に以下の3要素を柔軟に組み合わせてプロジェクトに参画していますので、お気軽にご相談ください。
    </p>
    <dl id="service-list">
      <dt>Project Management</dt>
      <dd>
        <p className="detail">PMBOK準拠, 各社ルール準拠, マネジメントプロセス改善 etc.</p>
        <p id="pm-note">* [Certification] PMP(PMI), ProjectManager(IPA.Japan)</p>
      </dd>
      <dt>Dev-Direction</dt>
      <dd>
        <p className="detail">顧客提案, 要件定義, 顧客対応, 開発ディレクション, 課題管理, テスト, 納品 etc.</p>
      </dd>
      <dt>Business Consulting</dt>
      <dd>
        <p className="detail">業務フロー構築/改善, ドキュメント作成, 問題整理/分析, 解決策策定/提案 etc.</p>
      </dd>
      <dt className="programming">Programming</dt>
      <dd>
        <p className="detail">out of service.</p>
      </dd>
    </dl>
  </section>

  <section id="skills" className="profile-section">
    <h3>skills</h3>
    <ul>
      <li>
        <ul className="skill-group">
          <li className="skill-title pm-skill">PMP(ProjectManagementProfessional)[PMI]</li>
          <li className="skill-title pm-skill">ProjectManager[IPA.Japan]</li>
          <li className="skill-title pm-skill">PMBOK Standards</li>
          <li className="skill-etc">...</li>
        </ul>
      </li>
      <li>
        <ul className="skill-group">
          <li className="skill-title tech-skill">Python</li>
          <li className="skill-title tech-skill">PHP</li>
          <li className="skill-title tech-skill">JavaScript(+React+Redux/flux,etc.)</li>
          <li className="skill-title tech-skill">HTML5</li>
          <li className="skill-title tech-skill">CSS3</li>
          <li className="skill-title tech-skill">Linux</li>
          <li className="skill-title tech-skill">MySQL/MariaDB</li>
          <li className="skill-etc">...</li>
        </ul>
      </li>
      <li>
        <ul className="skill-group">
          <li className="skill-title web-skill">Photoshop</li>
          <li className="skill-title web-skill">Illustrator</li>
          <li className="skill-etc">...</li>
        </ul>
      </li>
      <li>
        <ul className="skill-group">
          <li className="skill-title doc-skill">PowerPoint</li>
          <li className="skill-title doc-skill">Excel+VBA</li>
          <li className="skill-title doc-skill">Access</li>
          <li className="skill-title doc-skill">Word</li>
          <li className="skill-etc">...</li>
        </ul>
      </li>
    </ul>
  </section>
</div>

    );
  }
}

export default Profile
