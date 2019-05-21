import React from 'react';
import { observer } from "mobx-react";
import { meetingRooms, floorsWithMeetingRooms } from './constants.js';
import CreateNewMeetField from './components/Create-New-Meet-Window';
import FloorsWithMeetingRooms from './components/Floors-With-Meeting-Rooms';
import TimeBlocks from './components/Time-Blocks';
import Header from './components/Header';
import DatePicker from './components/Date-Picker';

let q = document.querySelector.bind(document);

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
{console.log(images)}
const Meetings = observer(
  class Meetings extends React.Component {
    componentDidMount() {
      let offsetForVerticalTimeLine =
        (new Date().getHours() - 8) * 76 +
        (75 / 60) * new Date().getMinutes();
      q(".main__vertical-line").style.left =
        offsetForVerticalTimeLine + "px";
      q(".main__time-now").style.left =
        offsetForVerticalTimeLine - 22 + "px";
    }
    componentDidUpdate() {
      let offsetForVerticalTimeLine =
        (new Date().getHours() - 8) * 76 +
        (75 / 60) * new Date().getMinutes();
      q(".main__vertical-line").style.left =
        offsetForVerticalTimeLine + "px";
      q(".main__time-now").style.left =
        offsetForVerticalTimeLine - 22 + "px";
    }
    render() {
      const { appState } = this.props;
      return(
        <React.Fragment>
          <Header appState={appState} image={images[45]} />
          <div className="main">
            { appState.newMeetWindowShow && <CreateNewMeetField images={images} appState={appState} />}
            <DatePicker appState={appState} leftArrow={images[43]} rightArrow={images[42]} />
            <FloorsWithMeetingRooms/>
            <div className="meeting-schedule">
              <div className="main__time-now">
                {appState.getTime().toTimeString().slice(0, 5)}
              </div>
              <div className="main__vertical-line" />
              <TimeBlocks/>

            </div>


          </div>
        </React.Fragment>
      )
    }
  }
)

export default Meetings;
