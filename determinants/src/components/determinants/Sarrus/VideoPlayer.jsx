import React from "react";

const VideoPlayer = () => {
  // IDs de los videos de YouTube
  const videoIds = [
    "8OnOZvc5rFQ?si=vcFaEzyRxFfH-_en",
    "0xt6iZDKCWw?si=-NE0s5V9eiDMJAW7",
    "L-k8FGWBFDk?si=AxooW13XfXZ2P8dp",
  ];

  return (
    <div className="video-grid">
      {videoIds.map((videoId) => (
        <div key={videoId} className="video-item">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
            title={`Video ${videoId}`}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
