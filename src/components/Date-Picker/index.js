import React from 'react';

class DatePicker extends React.Component {
  render() {
    const { appState, leftArrow, rightArrow } = this.props;
    return (
      <div className="main__date-picker">
        <div className="date-picker__date-today">
          <img className="date-picker__arrows" src={leftArrow} alt="" />
          <span>
            {appState.timeNow.getDate() +
              " " +
              appState.timeNow
                .toDateString()
                .split(" ")[1]
                .toLowerCase()}{" "}
            • Today
          </span>
          <img className="date-picker__arrows" src={rightArrow} alt="" />
        </div>
        <div className="date-picker__hours">
          {Array.apply(null, { length: 16 }).map((el, i) => (
            <span key={i + 8} className={`date-picker__hour hour${i}`}>
              {i + 8}
            </span>
          ))}
        </div>
      </div>
    )
  }
}

export default DatePicker;
