import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tile extends Component {

    render() {
        let flexColumnStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'flexStart',
            justifyContent: 'center'
        };

        let flexRowStyle = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'space-between',
            justifyContent: 'center',
            padding: this.props.padding,
            fontSize: '3em'
        };

        let avatarContainerStyle = {
            width: this.props.width + this.props.padding,
            height: this.props.height + 40,
            padding: this.props.padding,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #ececec'
        };

        return (
            <div style={flexColumnStyle}>
              <div style={avatarContainerStyle}>
                  <img src={this.props.avatar} height={this.props.height} width={this.props.width}/>
              </div>
              <div style={{marginTop: -20}}>
                  <div style={flexRowStyle}>
                      <a style={{color: 'white'}} href={this.props.gitUrl}  > {this.props.login} </a>
                  </div>
              </div>
          </div>
        );
    }
}

Tile.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    gitUrl: PropTypes.string.isRequired,
    padding: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired
};

export default Tile;
