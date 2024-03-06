import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { GlobalContext } from "../context/AppProvider";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory } = GlobalContext();
  const navigate = useNavigate();

  const clickHandler = (name, type) => {
      switch (type) {
          case "category":
              return setSelectedCategory(name);
          case "home":
              return setSelectedCategory(name);
          case "menu":
              return false;
          default:
              break;
      }
  };
  return (
    <div className="left-nav">
      {categories.map((item,index) => {
        return (
          <section key={index}>
            <LeftNavMenuItem
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => {
                clickHandler(item.name, item.type);
                navigate("/");
            }}
            className={`${
                selectedCategory === item.name ? "hov" : ""
            }`}
            />
             {item.divider && (
                                <hr className="border" />
                            )}
          </section>
        );
      })}
      <hr className="border" />
      <div className="author-detail">Clone by: Ayush Rawat</div>
    </div>
  
  );
};

export default LeftNav;
