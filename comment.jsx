"use strict";

import React from 'react';
import Remarkable from 'remarkable';

/*Comment component demo*/
export default class Comment extends React.Component{
    constructor(props){
        super(props);
    }
    rawMarkup(){
        let md = new Remarkable();
        let rawMarkup = md.render(this.props.children.toString());
        return {
            __html: rawMarkup
        }
    }
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}>{}</span>
            </div>
        )
    }
}

Comment.propTypes = {
        author: React.PropTypes.string.isRequired,
        children: React.PropTypes.node.isRequired
};
