import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import D from '../Custom-Delete-Icon';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

const InvitedParticipants = inject('NewMeetStore')(observer(
  class InvitedParticipants extends React.Component {
    render() {
      const { NewMeetStore : { people, deleteParticipant }, images, testAvatar } = this.props;
      return(
        <div className="invited-people"> {console.log(' debug people : ', people)}
        {Object.keys(people).map((keyName, i) => (
          <Chip
            avatar={<Avatar alt="" src={images[people[keyName].image]} />}
            label={keyName}
            onDelete={() => deleteParticipant(keyName)}
            deleteIcon={<D viewBox='0 0 52 52' />}
          />
        ))}
        {/*
          variants
          */}
          {/*<Chip
            avatar={<Avatar alt="Natacha" src={testAvatar} />}
            label="Deletable Chip"
            onDelete={() => {}}
            deleteIcon={<D viewBox='0 0 52 52' />}
          />
          <Chip
            avatar={<Avatar alt="" src={testAvatar} />}
            label="Deletable Chip"
            onDelete={() => {}}
            deleteIcon={<D viewBox='0 0 52 52' />}
            variant="outlined"
          />
          <Chip
            avatar={<Avatar alt="Natacha" src={testAvatar} />}
            label="Deletable Chip"
            onDelete={() => {}}
            className={''}
          />
          <Chip
            avatar={<Avatar alt="" src={images[people[keyName].image]} />}
            label="Deletable Chip"
            onDelete={() => deleteParticipant(keyName)}
            deleteIcon={<D viewBox='0 0 52 52' />}
            className="invited-people__participant"
            variant="outlined"
          />*/}
        </div>
      )
    }
  }
))

export default withStyles(styles)(InvitedParticipants);
