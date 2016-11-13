import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Skills from './Techstack';

export default class Project1 extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div>
        <FlatButton label="Tracked" backgroundColor='transparent' onTouchTap={this.handleOpen} />
        <Dialog
          title="Tracked"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Skills />
          <br />
          <img className="responsive-img" height="250" width="400" alt="minesweeper" src="http://i.imgur.com/CYrVRJ2.gif" />

        </Dialog>
      </div>
    );
  }
}
