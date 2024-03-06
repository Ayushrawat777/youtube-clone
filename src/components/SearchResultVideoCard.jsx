import React from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/videoLength";

const SearchResultVideoCard = ({ video }) => {
    return (
        <Link to={`/video/${video?.videoId}`}>
            <div className="Svid-box">
                <div className="Svid-img">
                    <img
                        className="Search-Svid-img"
                        src={video?.thumbnails[0]?.url}
                    />
                    {video?.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds} />
                    )}
                </div>
                <div className="Svid-detail">
                    <span className="Svid-detail-text">
                        {video?.title}
                    </span>
                    <span className="Svid-detail-des">
                        {video?.descriptionSnippet}
                    </span>
                    <div className="Svid-chanel-box">
                            <div className="schanel-icon">
                                <img
                                    className="chanel-logo"
                                    src={video?.author?.avatar[0]?.url}
                                />
                            </div>   
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold mt-2 text-white/[0.7] flex items-center">
                                {video?.author?.title}
                                {video?.author?.badges[0]?.type ===
                                    "VERIFIED_CHANNEL" && (
                                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                                )}
                            </span>
                            <div className="flex text-sm font-semibold text-white/[0.7] truncate overflow-hidden">
                                <span>{`${abbreviateNumber(
                                    video?.stats?.views,
                                    2
                                )} views`}</span>
                                <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                                    .
                                </span>
                                <span className="truncate">
                                    {video?.publishedTimeText}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SearchResultVideoCard;
