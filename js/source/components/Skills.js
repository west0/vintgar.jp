import React, {Component} from 'react';

type Props = {
  hoge: Array<Object>,
};

class Skills extends Component {
  props: Props;
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (

<section id="skills" className="page-component profile-section">
  <h3 className="page-title">skills</h3>
  <ul id="skill-info">
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
        <li className="skill-title doc-skill">PowerPoint</li>
        <li className="skill-title doc-skill">Excel+VBA</li>
        <li className="skill-title doc-skill">Access</li>
        <li className="skill-title doc-skill">Word</li>
        <li className="skill-etc">...</li>
      </ul>
    </li>
    <li>
      <ul className="skill-group">
        <li className="skill-title tech-skill">Python</li>
        <li className="skill-title tech-skill">PHP</li>
        <li className="skill-title tech-skill">JavaScript(+React+Redux/Flux,etc.)</li>
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
  </ul>
</section>

    );
  }
}

export default Skills
