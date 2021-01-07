import React, { Component } from 'react';
import './ControlBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRedoAlt,
  faTrashAlt,
  faCloudDownloadAlt,
} from '@fortawesome/free-solid-svg-icons';
class ControlBar extends Component {
  render() {
    return (
      <div className='ControlBar'>
        <button className='ControlBar__btn'>
          <FontAwesomeIcon icon={faRedoAlt} />
        </button>
        <button className='ControlBar__btn'>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button className='ControlBar__btn'>
          <FontAwesomeIcon icon={faCloudDownloadAlt} />
        </button>
      </div>
    );
  }
}
export default ControlBar;
