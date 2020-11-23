import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Widgets.modules.css'
import Tooltip from '@material-ui/core/Tooltip'

const Widgets = () => {
  return (
    <div className="widgets-container">
      <ul className="widgets-list">
        <li>
          <Tooltip title="Follow me on Facebook">
            <a target="_blank" href="https://www.facebook.com/leevi.andrews/"> <FaFacebook className="widget" /> </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Follow me on Github">
            <a target="_blank" href="https://github.com/leeviaa"> <FaGithub className="widget" />
            </a>
          </Tooltip>

        </li>
        <li>
          <Tooltip title="Follow me on LinkedIn">
            <a target="_blank" > <FaLinkedin className="widget" />
            </a>
          </Tooltip>
        </li>



      </ul>
    </div>
  )
}

export default Widgets