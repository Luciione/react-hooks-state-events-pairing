import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
