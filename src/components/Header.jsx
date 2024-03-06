import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../shared/loader";
import ytLogo from "../images/yt-logo.png";
/* import ytLogoMobile from "../images/yt-logo-mobile.png"; */
import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import { GlobalContext } from "../context/AppProvider";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading } = GlobalContext();
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const [theme, setTheme] = useState({backgroundColor:"white",color:"black"});
  const toggleTheme = () => {
    if (theme.backgroundColor === 'white') {
      setTheme({backgroundColor:"black",color:"white"});
    } else {
      setTheme({backgroundColor:"white",color:"black"});
    }
  };
  document.body.style.backgroundColor = theme.backgroundColor
  document.body.style.color = theme.color

  /* const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0]; */
  return (
    <div className="Header" >
      {loading && <Loader />}
      <div className="Header-container">
        <div className="logo">
          <Link to="/" className="logo-image">
            <img className="web-image" src={ytLogo} alt="Youtube" />
            {/*  <img
                        className="cell-image"
                        src={ytLogoMobile}
                        alt="Youtube"
                    /> */}
          </Link>
        </div>
        <div className="search">
          <div className="input-field">
            <input
              className="input"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
              id="form-input"
            />
          </div>
          <button
            className="search-icon"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <IoIosSearch />
          </button>
        </div>
        <div className="side-icon">
        <button onClick={toggleTheme}>Toggle Theme</button>

          <div className="create-content">
            <RiVideoAddLine />
          </div>
          <div className="notification">
            <FiBell />
          </div>
          <div className="account">
            <img
              src="https://xsgames.co/randomusers/assets/avatars/male/19.jpg"
              alt="account-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
