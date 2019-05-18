import React from 'react';
import { inject, observer } from 'mobx-react';

let qa =document.querySelectorAll.bind(document);

const SetTime = inject('NewMeetStore')(observer(
  class SetTime extends React.Component {
    render() {
      const { period, NewMeetStore: { possibleTimeShown, possibleEndTimeShown, beginTime, endTime, setBeginTime, setEndTime } } = this.props;
      return (
        <React.Fragment>
          <label htmlFor="meet-date" className={`new-meet-create__label-date-${period.toLowerCase()}`}>
            {period}
          </label>
          {
            (period === 'Begin' ? possibleTimeShown : possibleEndTimeShown) &&
            <ul
              onMouseOver={() => period === 'Begin' ? this.props.NewMeetStore.setPossibleTimeShown(1) : this.props.NewMeetStore.setPossibleEndTimeShown(1) }
              onMouseLeave={() => period === 'Begin' ? this.props.NewMeetStore.setPossibleTimeShown(false) : this.props.NewMeetStore.setPossibleEndTimeShown(false) }
              onClick={ (e) => {
                 const hours = +e.target.innerText.slice(0,2),
                        mins = +e.target.innerText.slice(3,5);
                 period === 'Begin' ? this.props.NewMeetStore.setPossibleTimeShown(false) : this.props.NewMeetStore.setPossibleEndTimeShown(false)
               } }
              className={`new-meet-create__possible-${period.toLowerCase()}-time`} >
              {Array.apply(null, { length: 5 }).map((el, i) => {
                const possibleTime = new Date(
                  new Date(period === 'Begin' ? beginTime : endTime).setMinutes(
                    Math.ceil( (new Date(period === 'Begin' ? beginTime : endTime).getMinutes() + 1) / 30) * 30 + (5 - i) * 30
                  )
                );
                const mins = possibleTime.getHours() * 60 + possibleTime.getMinutes();
                const diff = 60 < mins && mins < 480 ? 420 : 0;
                return (
                  <li
                    onPointerEnter={ () => ( qa('li')[i].style.background = '#E9ECEF' ) }
                    onPointerLeave={ () => ( qa('li')[i].style.background = '#FFF' ) }
                    key={i}
                  >
                    {
                          new Date(
                            new Date(period === 'Begin' ? beginTime : endTime).setMinutes(
                              Math.ceil( (new Date(period === 'Begin' ? beginTime : endTime).getMinutes() + 1) / 30) *
                                30 +
                                (4 - i) * 30 +
                                diff
                            )
                          )
                            .toString()
                            .slice(16, 21)
                    }
                  </li>
                )
              })}
            </ul>
          }
          <input
            className="new-meet-create__time"
            type="time"
            value = { period === 'Begin' ? typeof beginTime === 'object' ? beginTime.toTimeString().slice(0,5) : endTime : typeof endTime === 'object' ? endTime.toTimeString().slice(0,5) : endTime }
            onChange={ (e) => { period === 'Begin' ? setBeginTime(e) : setEndTime(e) } }
            onMouseOver={() => period === 'Begin' ? this.props.NewMeetStore.setPossibleTimeShown(true) : this.props.NewMeetStore.setPossibleEndTimeShown(true)}
          />
        </React.Fragment>
      )
    }
  }
))

export default SetTime;
