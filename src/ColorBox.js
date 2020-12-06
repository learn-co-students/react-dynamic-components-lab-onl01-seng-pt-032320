import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  //if this.props.opacity >= .2
  //do colorbox, opacity passed to child and reduced by .1
  //else return null
  render() {
    const opacity = this.props.opacity;
    const iteration = this.props.opacity - .1;
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        { opacity >= 0.2 ? <ColorBox opacity = {iteration}/> : null}
      </div>
    )
  }

}

