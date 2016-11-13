import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};
const style1 = {
  float: 'right',
};

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Header extends Component {
  render() {
    return(
  <div>
    <MuiThemeProvider><div>
              <FlatButton label="Keng Hong" />
              <Link to='/'><FlatButton label="About" /></Link>
              <Link to='/portfolio'><FlatButton label="Portfolio" /></Link>
              <div style={style1}>
              <a href='https://github.com/kengste'><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa fa-envelope-square fa-2x" aria-hidden="true"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              </div>
              </MuiThemeProvider>
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
