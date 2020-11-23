import './Skills.modules.css'
import React from 'react';
// import Tooltip from '@material-ui/core/Tooltip';
// import { SiJavascript } from 'react-icons/si'
// import { FaNodeJs } from 'react-icons/fa'
// import { GrReactjs } from 'react-icons/gr';
import SkillsList from '../skills-list/SkillsList'

const Skills = () => {
  return (
    <div>
      <h2>Relevant Skills</h2>
      <div className="skills-lists-container">
        <SkillsList
          title="Languages and Frameworks"
          skills={['Javascript', 'ReactJS', 'NodeJS', 'React Native']}
        />
        <SkillsList
          title="Other tools"
          skills={['Axios', 'Github', 'ExpressJS', 'Mongoose', 'MongoDB']}
        />
      </div>
    </div>

  )
}

export default Skills;