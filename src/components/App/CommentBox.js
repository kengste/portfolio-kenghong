import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import style from './style';

class CommentBox extends Component {
  constructor (props) {
    super(props);
    this.state = { data: [] };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
    this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
  }
  loadCommentsFromServer () {
    axios.get('http://localhost:3001/api/comments')
    .then(res => {
      this.setState({data: res.data});
    });
  }
  handleCommentSubmit (comment) {
    let comments = this.state.data;
    comment.id = Date.now();
    let newComments = comments.concat([comment]);
    this.setState({data: newComments});
    axios.post('http://localhost:3001/api/comments', comment)
    .catch(err => {
      console.error(err);
      this.setState({data: comments});
    });
  }
  handleCommentUpdate (id, comment) {
    axios.put(`http://localhost:3001/api/comments/${id}`, comment)
    .catch(err => {
      console.log(err);
    });
  }
  handleCommentDelete (id) {
    axios.delete(`http://localhost:3001/api/comments/${id}`)
    .then(res => {
      console.log('Comment deleted');
    })
    .catch(err => {
      console.error(err);
    });
  }
  componentDidMount () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, 1000);
  }
  componentWillUnMount () {
    clearInterval(this.loadCommentsFromServer);
    this.loadCommentsFromServer = false;
  }
  render () {
    return (
      <div style={style.commentBox}>
        <h2>Topic:</h2>
        <CommentList
          onCommentDelete={this.handleCommentDelete}
          onCommentUpdate={this.handleCommentUpdate}
          data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}
export default CommentBox;
