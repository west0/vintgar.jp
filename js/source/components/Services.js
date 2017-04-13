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
  <h3 className="page-title">service</h3>
{/*  <div><img id="service-img" src="images/service.png" alt="project management, dev-direction, business-consulting" /></div>*/}
  <p>
    フリーランスでプロジェクト推進をお手伝いしています。<br />皆様の課題に合わせて、主に以下の要素を柔軟に組み合わせてお手伝いいたします。まずはお気軽にご相談ください。
  </p>
  <dl id="service-list">
    <dt>プロジェクトマネジメント</dt>
    <dd>
      <p className="detail">PMBOK準拠, 各社ルール準拠, マネジメントプロセス改善 etc.</p>
      <p id="service-note">* [Certification] PMP(PMI), ProjectManager(IPA.Japan)</p>
    </dd>
    <dt>開発ディレクション</dt>
    <dd>
      <p className="detail">顧客提案/対応, 要件定義, 開発ディレクション/課題管理, テスト etc.</p>
      <p id="service-note">* [対象]Webサイト, Smartphoneアプリ, その他システム</p>
    </dd>
    <dt>ビジネスコンサルティング</dt>
    <dd>
      <p className="detail">業務フロー構築/改善, 資料作成, 問題整理/分析, 解決策提案/実行 etc.</p>
    </dd>
    <dt className="programming">エンジニア業務</dt>
    <dd>
      <p className="detail">技術実務の提供は終了しました。</p>
    </dd>
  </dl>
</section>

    );
  }
}

export default Services
