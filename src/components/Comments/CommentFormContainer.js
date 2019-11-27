import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import { createComment } from '../../actions/comments';

export class CommentFormContainer extends Component {
  state = {
    comment: ''
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state.comment);
    this.setState({
      comment: ''
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <CommentForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state}
          ticket={this.state.ticket}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ticket: state.ticket
  };
};

const mapDispatchToProps = {
  createComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentFormContainer);
