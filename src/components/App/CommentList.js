import React, { Component } from 'react';
import Comment from './Comment';
import style from './style';

class CommentList extends Component {
  render () {
    let commentNodes = this.props.data.map(comment => {
      return (
        <Comment
          key={comment['_id'] + '23wdw'}
          author={comment.author}
          onCommentDelete={this.props.onCommentDelete}
          onCommentUpdate={this.props.onCommentUpdate}
          uniqueID={comment['_id']}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div style={style.commentList}>
        {commentNodes}
      </div>
    );
  }
}
export default CommentList;
