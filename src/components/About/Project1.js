import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import Skills from './Skills';




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
        <FlatButton label="Minesweeper" backgroundColor='transparent' onTouchTap={this.handleOpen} />
        <Dialog
          title="Minesweeper"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Skills />
          <br />
          <img className="responsive-img" height="200" width="200" alt="minesweeper" src="http://i.imgur.com/p3T9DqL.gif" />

        </Dialog>
      </div>
    );
  }
}
