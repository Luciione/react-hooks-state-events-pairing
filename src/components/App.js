import React from 'react';
import VideoPlayer from './VideoPlayer';
import VideoActions from './VideoActions';
import ToggleCommentsButton from './ToggleCommentsButton';
import { video } from '../data/video'; // Check the relative path to the video.js file

const App = () => {
  return (
    <div>
      <VideoPlayer video={video} />
      <VideoActions video={video} />
      <ToggleCommentsButton comments={video.comments} />
    </div>
  );
};

export default App;
