import React from 'react';
import { inject, observer } from 'mobx-react';
import { participants } from '../../constants.js';

const qa = document.querySelectorAll.bind(document);

const Participants = inject('NewMeetStore', 'GeneralStore')(observer(
  class Participants extends React.Component {
    render() {
      const {
        NewMeetStore: { setParticipantsListIsShown, participantsListIsShown, people },
        GeneralStore: { findingParticipantChange, findingParticipant },
        images
      } = this.props;
      return (
        <React.Fragment>
          <label htmlFor="select" className="new-meet-create__meet-people-label">People</label>
          <input
            placeholder="For example, Elon Musk"
            type="text"
            className="new-meet-create__meet-people"
            onFocus={() => setParticipantsListIsShown(3) }
            onBlur={() => setParticipantsListIsShown(false) }
            onMouseOver={ () => { if (participantsListIsShown !== 3) setParticipantsListIsShown(1) } }
            onMouseOut={ () => {
              setTimeout( () => {
                if ( participantsListIsShown !== 3 && participantsListIsShown !== 2) {
                  setParticipantsListIsShown(false)
                } }, 300)
            } }
            onChange={ e => findingParticipantChange(e.target.value) }
            value={ findingParticipant }
          />
          { participantsListIsShown &&
            <div
              className="new-meet-create__participants-list"
              onMouseOver={ () => { if (participantsListIsShown !== 3) setParticipantsListIsShown(2) }}
            >
              <ul className='new-meet-create__meet-people-list' > {console.log(' participants : ', participants)}
                { participants.filter( ({ name }) => name.toLowerCase().indexOf(findingParticipant.toLowerCase()) !== -1 ).map( (el, i) =>
                    <li
                      key={i}
                      onMouseDown={ e => this.addParticipant(e, el.name, i)}
                      onPointerEnter={ () => ( qa('li')[i].style.background = '#E9ECEF' ) }
                      onPointerLeave={ () => ( qa('li')[i].style.background = '#FFF' ) }
                    >
                      <img src={images[i]} width="24px" height="24px" className="meet-people-list__avatar" alt=""/>
                      {el.name}<span>{el.about}{people[el.name] && <b className="meet-people-list__added" > added</b>}</span>
                    </li>
                ) } {/* change images[1] to images[i] */}
              </ul>
              <div className="new-meet-create__hint" >
                <div className="new-meet-create__hint-text" >hint</div>
                You can write the name of the guest and the pass will be ordered automatically
              </div>
            </div>
          }
        </React.Fragment>
      )
    }
  }
))

export default Participants;
