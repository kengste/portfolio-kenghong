import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Header extends Component {
  render() {
    return(
  <div>
    <MuiThemeProvider><div>
              <Link to='/'><FlatButton label="Home" /></Link>
              <Link to='/about'><FlatButton label="About" /></Link>
              <Link to='/portfolio'><FlatButton label="Portfolio" /></Link>
              </div></MuiThemeProvider>
      <ReactCSSTransitionGroup
            component="div"
            transitionName="example"
            transitionEnterTimeout={100}
            transitionLeaveTimeout={100}
          >
            {React.cloneElement(this.props.children, {
              key: location.pathname
            })}
          </ReactCSSTransitionGroup>

      </div>
    );
}}

export default Header;
