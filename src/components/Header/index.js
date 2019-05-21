import React from 'react';
import Button from '../Button';

class Header extends React.Component {
  render() {
    const { appState, image } = this.props,
            buttonNewMeetProps = { bg: '#266dc2', pos: 'absolute', top: '18px', left: '1355px', width: '140px', height: '36px' };
    return (
      <div className="header">
        <img className="header__gp-icon" src={image} width="50" height="50" alt="" />
        <div className="header__text">Meetings</div>
        <Button
          style={buttonNewMeetProps}
          onClickHandler={appState.toggleNewMeetWindowShow}
        > {/* onClickHandler prop cause just using onClick here doesnt work */}
          { appState.newMeetWindowShow ? 'cancel meet' : 'new meet' }
        </Button>
      </div>
    )
  }
}

export default Header;
