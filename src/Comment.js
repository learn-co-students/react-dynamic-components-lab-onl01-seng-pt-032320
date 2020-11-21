import React, { Component } from 'react'


export default class Comment extends Component {
  render() {
    return (
        
      <div className="comment">
      
            {this.props.key}
            {this.props.commentText}
       
      </div>
    )
    
  }
}

