import React from "react";

const VideoPlayer = () => {
  // IDs de los videos de YouTube
  const videoIds = [
    "RWMm4vgFwC4?si=z5hOMRGD9H_d0OoW",
    "gEhN_-d_dDQ?si=rW7LZ9cgQyS7oE5W",
    "tlE-rXyGZBg?si=WcHb26agkdhaR8tV",
  ];

  return (
    <div className="video-grid">
      {videoIds.map((videoId) => (
        <div key={videoId} className="video-item">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allowfullscreen
            title={`Video ${videoId}`}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
