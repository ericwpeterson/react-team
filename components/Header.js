import ReactLogo from '../images/React-icon.svg.png';
import React, { Component } from 'react';

let headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 240
};

class Header extends Component {
    render() {
        return (
          <div style = {headerStyle}>
              <img width={113 * 2} height={80 * 2} src={ReactLogo} />
              <h1 style={{fontSize: '5em'}} > React Team </h1>
          </div>
        );
    }
}

export default Header;
