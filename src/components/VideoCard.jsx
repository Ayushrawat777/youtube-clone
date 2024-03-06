import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import VideoLength from "../shared/videoLength"; 

const VideoCard = ({ video }) => {
  const {
    author,
    stats,
    thumbnails,
    descriptionSnippet,
    publishedTimeText,
    lengthSeconds,
    title,
    videoId
  } = video;
  return (
    <NavLink  to={`/video/${video?.videoId}`}>
    <div className="video-card">
        <div className="video-thumbnail">
            <img
                className="thumbnail"
                src={thumbnails[0].url}
                alt="thumbnail-logo"
            />
         {lengthSeconds && (
                         <VideoLength  time={lengthSeconds}  />
                    )} 
        </div>
         <div className="card-body">
            <div className="card-icon-box">
                <div className="c-body-icon">
                    <img
                        className="icon"
                        src={author.avatar[0].url}
                        alt="icon"
                    />
                </div>
            </div>
            <div className="card-container">
                <span className="card-title">
                    {title}
                </span>
                <span className="card-badge">
                     {author.title}
                     {author.badges[0]?.type ===
                                "VERIFIED_CHANNEL" && (
                                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                            )}
                </span>
                <div className="card-views">
                    <span>{`${abbreviateNumber(
                        stats.views,
                        2
                    )} views`}</span>
                    <span className="card-dot">
                        .
                    </span>
                    <span className="card-video-time">
                        {publishedTimeText}
                    </span>
                </div>
            </div>
        </div> 
    </div>
</NavLink>
  );
};

export default VideoCard;
