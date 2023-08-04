import React, { useState } from 'react';

const VideoActions = ({ video }) => {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  return (
    <div>
      <button onClick={handleUpvote}>👍 {upvotes}</button>
      <button onClick={handleDownvote}>👎 {downvotes}</button>
    </div>
  );
};

export default VideoActions;
