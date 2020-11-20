import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  // render() {
  //   { your conditional code here!
  //       if opacity > 0.2 
  //         <div className="color-box"
  //         newValue - 0.1
  //       else 
  //         return null 
  //         end  }
  //   return (
  //     <div className="color-box" style={{opacity: null}}>
  //     </div>
  //   )
  // }

  //if this props opacity is over 0.2: return div class color box 
    //with the style thats equal to this props opacity
    //then we take the colorbox opacity and minus 0.1
    // else return null

  render () {
    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )
    } else {
      return null
    }
  }

}

