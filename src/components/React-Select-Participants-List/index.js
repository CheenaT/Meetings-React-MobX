import React from 'react';
import Select from 'react-select';
import Tooltip from '@material-ui/core/Tooltip';
import { inject, observer } from 'mobx-react';
import { participants } from '../../constants';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const ParticipantsListSelect = observer(({ NewMeetStore }) =>
  <Tooltip
    title="You can write the name of the guest and the pass will be ordered automatically"
    placement="top"
  >
    <div className="new-meet-create__meet-people" > {/* div for tooltip working */}
      <Select
        onChange={(e) => {
          console.log( ' select target value : ', e, NewMeetStore );
          let newPeople = {};
          for(let i = 0; i < e.length; i++ ) {
            // NewMeetStore.addParticipant(e[i].value, i)
            newPeople[e[i].value] = { name: e[i].value, image: e[i].id }
          }
          NewMeetStore.addParticipant(newPeople)
        }}
        isMulti
        name="colors"
        options={participants}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="For example, Elon Musk"
      />
    </div>
  </Tooltip>
)

export default ParticipantsListSelect;
