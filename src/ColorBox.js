import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  newColorBox(newOpacity) {
    if (newOpacity >= 0.1) {
    return <ColorBox opacity={newOpacity} />
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        { this.newColorBox(this.props.opacity-0.1) }
      </div>
    )
  }

}

