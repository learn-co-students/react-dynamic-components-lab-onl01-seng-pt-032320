//your code here
import React, { Component } from 'react';
import BlogPost from './BlogPost.js'

export default class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }

}


// so we are passing this child the parents info? this is props
// so we call this.props.commenttext here but in the blog post we have the comment text array...
// Don't forget - we can unpack variable values directly with JSX by wrapping them in {}, i.e. {this.props.commentText}

