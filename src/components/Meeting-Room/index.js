import React from 'react';
import { inject, observer } from 'mobx-react';
import { floorsWithMeetingRooms } from '../../constants.js';

const MeetingRoom = inject('NewMeetStore', 'GeneralStore')(observer(
  class MeetingRoom extends React.Component {
    state = {
      meetingRoomIsHover: false
    };
    hoverMeetingRoom = (e, i) => {
      const { NewMeetStore: { setRecommendedMeetingRoom }, GeneralStore : { timeBlocks } } = this.props;
      let copyRecommendedMeetingRoom = [], hours = new Date().getHours(), j = 0;
      if ( hours === 0 ) {
        hours = 24;
      }
        floorsWithMeetingRooms.forEach( floor => {
          floor.meetingRooms.forEach( el => {
            if ( !timeBlocks[hours - 8 + 17 * j++] ) {
              copyRecommendedMeetingRoom.push({ room: el.room, floor: floor.floor })
            }
          })
        })
      console.log( ' debug copyRecommendedMeetingRoom : ', copyRecommendedMeetingRoom);
      setRecommendedMeetingRoom(copyRecommendedMeetingRoom);
    }
    render() {
      const {
        NewMeetStore: { setRecommendedMeetingRoom, setMeetingRoomIsHover, recommendedMeetingRoom, meetingRoomIsHover, beginTime, endTime },
        GeneralStore: { setSelectedMeetingRoom, selectedMeetingRoom, timeBlocks },
        buttomArrowIcon
      } = this.props;
      return(
        <React.Fragment>
          <span className="new-meet-create__recommended-meeting-rooms-text">
            {selectedMeetingRoom ? "Meeting room" : "Recommended meeting room"}
            { recommendedMeetingRoom.length > 1 ? "s" : ""}
          </span>
          {
            selectedMeetingRoom && (
              <div
                className="new-meet-create__selected-meeting-room"
                onMouseOver={ () => { this.hoverMeetingRoom(); this.setState({ meetingRoomIsHover: 1}) } }
                onMouseOut={ () => {
                  // let tempMeetingRoomIsHover = meetingRoomIsHover;
                  setTimeout( () => {
                    console.log(' debug meetingRoomIsHover : ', meetingRoomIsHover, this.meetingRoomIsHover);
                    if ( this.state.meetingRoomIsHover === 1 ) {
                      setRecommendedMeetingRoom([]);
                      this.setState({ meetingRoomIsHover: false});
                    }
                  }, 200)
                } }
              >
                <img
                  src={buttomArrowIcon}
                  alt=""
                  className="new-meet-create__buttom-arrow"
                  onMouseOver={ () => { this.hoverMeetingRoom(); this.setState({ meetingRoomIsHover: 1}) } }
                  onMouseOut={() =>
                    this.setState({
                      recommendedMeetingRoom: [],
                      meetingRoomIsHover: false
                    })
                  }
                />
              {
                meetingRoomIsHover ? "Choose another meeting room?" : selectedMeetingRoom
              }
              </div>
            )
          }
          {
            !selectedMeetingRoom && <div className="new-meet-create__selected-meeting-room" >Choose meeting room</div>
          }
          <ul
            className="new-meet-create__meet-rooms"
            onMouseOver={ () => this.setState({ meetingRoomIsHover: 2}) }
            onMouseLeave={ () => {
              setTimeout( () => {
                console.log(' debug meetingRoomIsHover : ', meetingRoomIsHover, this.meetingRoomIsHover);
                if (this.state.meetingRoomIsHover === 2 && selectedMeetingRoom) {
                    setRecommendedMeetingRoom([]);
                    this.setState({ meetingRoomIsHover: false});
                }
              }, 200)
            }
          }
          >
          { ( meetingRoomIsHover && selectedMeetingRoom ) ?
            recommendedMeetingRoom.map( (el, i) =>
                <li
                  key={i}
                  className="new-meet-create__meet-room"
                  onClick={ () => {
                    setRecommendedMeetingRoom([]);
                    this.setState({ meetingRoomIsHover: false});
                    setSelectedMeetingRoom(el.room);
                  } }
                >
                  {`${beginTime.toTimeString().slice(0,5)} — ${endTime.toTimeString().slice(0,5)}  `}{el.room + ' • ' + el.floor + ' floor'}
                </li>
            ) :
            recommendedMeetingRoom.map( (el, i) =>
                <li key={i} className="new-meet-create__meet-room"
                  onClick={ () => {
                    setRecommendedMeetingRoom([]);
                    this.setState({ meetingRoomIsHover: false});
                    setSelectedMeetingRoom(el.room);
                  } }
                >
                  {`${beginTime.toTimeString().slice(0,5)} — ${endTime.toTimeString().slice(0,5)}  `}{el.room + ' • ' + el.floor + ' floor'}
                </li>
            )
          }
          </ul>
        </React.Fragment>
      )
    }
  }
))

export default MeetingRoom;
