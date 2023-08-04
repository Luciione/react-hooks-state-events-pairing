import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <div>
      <iframe
        title="Video Player"
        width="560"
        height="315"
        src={video.videoUrl}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPlayer;
