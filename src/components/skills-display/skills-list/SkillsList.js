import React from 'react';
import './SkillsList.modules.css'
import Tooltip from '@material-ui/core/Tooltip'
import icons from '../../../icons/icons';

const SkillsList = ({ title, skills }) => {
  //loop through icons import to find right icon
  const findMatchingIcon = (iconName) => {
    const icon = icons.find(icon => icon.name === iconName)

    return icon;
  }
  // dynamically generate list to display
  const list = skills.map(skill => {
    //find matching icon based on skill name
    const iconToShow = findMatchingIcon(skill)
    if (!iconToShow) {
      iconToShow.icon = null
    }
    return (
      <li className="skill-container">
        <p>{skill}</p>
        {iconToShow.icon}
      </li>
    )
  })
  return (
    <div className="skills-display-container">
      <h4>{title}</h4>
      <ul className="skills-list-container">
        {list}
      </ul>
    </div>
  )
}

export default SkillsList