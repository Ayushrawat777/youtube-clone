import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action }) => {
    return (
        <div
            className={"left-item "+ className}
            onClick={action}
        >
            <span className="left-item-icon">{icon}</span>
            {text}
        </div>
    );
};

export default LeftNavMenuItem;
