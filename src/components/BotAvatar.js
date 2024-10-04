import React from "react";
import catbot from "./catbot.png";

// Custom bot avatar component
const BotAvatar = () => {
    return (
        <div
            style={{
                backgroundColor: "#f1c40f",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#fff",
            }}
        >
            <img
                src={catbot} // Example of using an image from the public folder
                alt="Bot Avatar"
                style={{ width: "70%" }} // Ensure the image is rounded
            />
        </div>
    );
};

export default BotAvatar;
