import React from 'react';
import { observer } from "mobx-react";

let qa =document.querySelectorAll.bind(document);

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./../../images', false, /\.(png|jpe?g|svg)$/));

const CreateNewMeetField = observer(
  class CreateNewMeetField extends React.Component {
    render() {
      return (
        <div className="main__new-meet-create">
          <img onClick={''} src={images[44]} alt="" className="new-meet-create__circle-icon-with-close"/>
        </div>
      )
    }
  }
)

export default CreateNewMeetField;
