/* @flow */

import React, {Component} from 'react';

type Props = {
  hoge: Array<Object>,
};

class Services extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (

<section id="services" className="page-component profile-section">
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

    );
  }
}

export default Services
