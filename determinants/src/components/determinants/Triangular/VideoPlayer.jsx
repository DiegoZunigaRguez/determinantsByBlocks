import React from "react";

const VideoPlayer = () => {
  // IDs de los videos de YouTube
  const videoIds = [
    "vT9CiPU7v7k?si=kENGzd4Q6MLWMgjN",
    "2_ZFXAU6LEY?si=0UpnnOaxKoik4QWl",
    "rF5CPUq9Zbk?si=42jPWFh8InCHzj_q",
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
