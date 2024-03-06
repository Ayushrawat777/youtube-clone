import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number"; 
import { GlobalContext } from "../context/AppProvider";
import { fetchDataFromApi } from "../utils/api";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState('');
  const { id } = useParams();
  const { setLoading } = GlobalContext();

  const fetchVideoDetails = () => {
    setLoading(true);
        fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
            setVideo(res);
            setLoading(false);
    });
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
        console.log(res);
        setRelatedVideos(res);
        setLoading(false);
    });
};

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, []);

    return (
        <div className="Single-Container">
            <div className="Single-box">
                <div className="main-video">
                    <div className="player">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            width="100%"
                            height="100%"
                            style={{ backgroundColor: "#000000" }}
                            playing={true}
                        />
                    </div>
                    <div className="Single-title">
                        {video?.title}
                    </div>
                    <div className="Single-vid-details">
                        <div className="Single-left">
                                <div className="Single-channel-icon">
                                    <img
                                        className="Single-icon"
                                        src={video?.author?.avatar[0]?.url}
                                    />
                                </div>
                            <div className="Single-channel-details">
                                <div className="Single-Channel-name">
                                    {video?.author?.title}
                                    {video?.author?.badges[0]?.type ===
                                        "VERIFIED_CHANNEL" && (
                                        <BsFillCheckCircleFill className="single-verified" />
                                    )}
                                </div>
                                <div className="Single-Channel-subscriber">
                                    {video?.author?.stats?.subscribersText}
                                </div>
                            </div>
                        </div>
                        <div className="Single-right">
                            <div className="Single-Like">
                                <AiOutlineLike className="Like-logo" />
                                {`${abbreviateNumber(
                                    video?.stats?.views,
                                    2
                                )} Likes`}
                            </div>
                            <div className="Single-View">
                                {`${abbreviateNumber(
                                    video?.stats?.views,
                                    2
                                )} Views`}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Related-video-box">
                    {relatedVideos?.contents?.map((item, index) => {
                        if (item?.type !== "video") return false;
                        return (
                            <SuggestionVideoCard
                                key={index}
                                video={item?.video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;