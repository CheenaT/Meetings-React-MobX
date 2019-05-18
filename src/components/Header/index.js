import React from 'react';

class Header extends React.Component {
  render() {
    const { appState, image } = this.props;
    return (
      <div className="header">
        <img className="header__gp-icon" src={image} width="50" height="50" alt="" />
        <div className="header__text">Meetings</div>
        <button className="header__button-create-meeting" onClick={appState.toggleNewMeetWindowShow}>
          { appState.newMeetWindowShow ? 'cancel meet' : 'new meet' }
        </button>
      </div>
    )
  }
}

export default Header;
