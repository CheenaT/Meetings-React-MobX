import React from 'react';
import { inject, observer } from 'mobx-react';

let qa =document.querySelectorAll.bind(document);

const SetTime = inject('NewMeetStore')(observer(
  class SetTime extends React.Component {
    state = {
      possibleTimeShown: false,
      possibleEndTimeShown: false
    }
    render() {
      const { period, NewMeetStore: { possibleTimeShown, possibleEndTimeShown, beginTime, endTime, setBeginTime, setEndTime } } = this.props;
      return (
        <React.Fragment>
          <label htmlFor="meet-date" className={`new-meet-create__label-date-${period.toLowerCase()}`}>
            {period}
          </label>
          {
            (period === 'Begin' ? this.state.possibleTimeShown : this.state.possibleEndTimeShown) &&
            <ul
              onMouseOver={() => period === 'Begin' ? this.setState({ possibleTimeShown: 2}) : this.setState({ possibleEndTimeShown: 2}) }
              onMouseLeave={ () => {
                setTimeout( () => {
                  if ( period === 'Begin' ? this.state.possibleTimeShown === 2 : this.state.possibleEndTimeShown === 2 ) {
                    period === 'Begin' ? this.setState({ possibleTimeShown: false }) : this.setState({ possibleEndTimeShown: false })
                  }
                }, 200)
              } }
              onClick={ (e) => {
                 if (period === 'Begin') {
                   setBeginTime(e.target.innerText);
                   this.setState({ possibleTimeShown: false })
                 } else {
                   setEndTime(e.target.innerText);
                   this.setState({ possibleEndTimeShown: false })
                 }
               } }
              className={`new-meet-create__possible-${period.toLowerCase()}-time`} >
              {Array.apply(null, { length: 5 }).map((el, i) => {
                const possibleTime = new Date(
                  new Date(period === 'Begin' ? typeof beginTime === 'object' ? beginTime : new Date().setHours(beginTime.slice(0,2), beginTime.slice(3,5)) : typeof endTime === 'object' ? endTime : new Date().setHours(endTime.slice(0,2), endTime.slice(3,5)) ).setMinutes(
                    Math.ceil( (new Date(period === 'Begin' ? typeof beginTime === 'object' ? beginTime : new Date().setHours(beginTime.slice(0,2), beginTime.slice(3,5)) : typeof endTime === 'object' ? endTime : new Date().setHours(endTime.slice(0,2), endTime.slice(3,5))).getMinutes() + 1) / 30) * 30 + (5 - i) * 30
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
                            new Date(period === 'Begin' ? typeof beginTime === 'object' ? beginTime : new Date().setHours(beginTime.slice(0,2), beginTime.slice(3,5)) : typeof endTime === 'object' ? endTime : new Date().setHours(endTime.slice(0,2), endTime.slice(3,5))).setMinutes(
                              Math.ceil( (new Date(period === 'Begin' ? typeof beginTime === 'object' ? beginTime : new Date().setHours(beginTime.slice(0,2), beginTime.slice(3,5)) : typeof endTime === 'object' ? endTime : new Date().setHours(endTime.slice(0,2), endTime.slice(3,5))).getMinutes() + 1) / 30) *
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
            value = { period === 'Begin' ? typeof beginTime === 'object' ? beginTime.toTimeString().slice(0,5) : beginTime : typeof endTime === 'object' ? endTime.toTimeString().slice(0,5) : endTime }
            onChange={ (e) => { period === 'Begin' ? setBeginTime(e.target.value) : setEndTime(e.target.value) } }
            onMouseOver={() => period === 'Begin' ? this.setState({ possibleTimeShown: 1}) : this.setState({ possibleEndTimeShown: 1}) }
            onMouseLeave={ () => {
              setTimeout( () => {
                if ( period === 'Begin' ? this.state.possibleTimeShown === 1 : this.state.possibleEndTimeShown === 1 ) {
                  period === 'Begin' ? this.setState({ possibleTimeShown: false }) : this.setState({ possibleEndTimeShown: false })
                }
              }, 200)
            } }
          />
        </React.Fragment>
      )
    }
  }
))

export default SetTime;
