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
        <div> {/* Wrap inside a div */}
          <CommentList comments={comments} />
        </div>
      )}
    </div>
  );
};

export default ToggleCommentsButton;
