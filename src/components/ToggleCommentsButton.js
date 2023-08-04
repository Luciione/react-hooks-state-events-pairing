import React, { useState } from 'react';
import CommentList from './CommentList';

const ToggleCommentsButton = ({ comments }) => {
  const [showComments, setShowComments] = useState(true);

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      <button onClick={handleToggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && comments.length > 0 && (
        // Wrap the elements in a fragment or a div
        <>
          <div>{/* Any other elements you want to include */}</div>
          <CommentList comments={comments} />
        </>
      )}
    </div>
  );
};

export default ToggleCommentsButton;
