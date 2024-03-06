import { GlobalContext } from "../context/AppProvider";
import VideoCard from "./VideoCard";
import LeftNav from "./LeftNav";
import ytLogo from "../images/yt-logo.png";

const Feed = () => {
  const { searchResults, loading } = GlobalContext();

  return (
    <div className="main-container">
      <div className="left-container">
        <LeftNav />
      </div>
      <div className="feed-container">
        {!loading &&
          searchResults.map((item,index) => {
            if (item.type !== "video") return false;
            return (
              <div className="video-container">
                <VideoCard key={index} video={item.video} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Feed;
