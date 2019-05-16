import React from "react";
import { floorsWithMeetingRooms } from "../../constants.js";

class FloorsWithMeetingRooms extends React.Component {
  render() {
    let i = 0;
    return (
      <div className="main__meeting-rooms">
        {floorsWithMeetingRooms.map(el => (
          <React.Fragment key={el.floor}>
            <p className="meeting-rooms__floor">{el.floor + " floor"}</p>
            <ul>
              {el.meetingRooms.map(el => (
                <li key={el.room} className={`meeting-room-${i++}`}>
                  <p>{el.room}</p>
                  {el.capacityMax ? (
                    <p>{`from ${el.capacity} to ${el.capacityMax} people`}</p>
                  ) : (
                    <p>{`up to ${el.capacity} people`}</p>
                  )}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default FloorsWithMeetingRooms;
