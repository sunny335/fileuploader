import React, { Component } from 'react';
import './ListItem.css';
import ControlBar from './ControlBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileImage,
  faFileAudio,
  faFileAlt,
  faFileVideo,
} from '@fortawesome/free-solid-svg-icons';
class ListItem extends Component {
  render() {
    const icons = {
      jpg: faFileImage,
      mov: faFileVideo,
      txt: faFileAlt,
      mp3: faFileAudio,
    };
    return (
      <div className='ListItem'>
        <div className='ListItem__icon'>
          <div className='ListItem__circle'>
            <FontAwesomeIcon icon={icons.[this.props.fileType]} />
            list icon
          </div>
        </div>
        <div className='ListItem__content'>
          <div className='ListItem__heading'>
            <div className='ListItem__title'>{this.props.name} </div>
          <div className='ListItem__status'>{this.props.status}</div>
          </div>
        </div>
        <div className='ListItem__actions'>
            <div className='ListItem__size'>{this.props.size} </div>
          <ControlBar/>
        </div>
      </div>
    );
  }
}
export default ListItem;
