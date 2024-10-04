import React from "react";
import ReactMarkdown from "react-markdown";
import "react-chatbot-kit/build/main.css";
import { useState, useEffect } from "react";

// Function to handle typing effect with for loop
const typeTextWithDelay = (message, setDisplayedText, typingSpeed) => {
    for (let i = 0; i <= message.length; i++) {
        setTimeout(() => {
            setDisplayedText(message.slice(0, i)); // Set the displayed text progressively
        }, i * typingSpeed); // Delay increases with each character
    }
};

// Custom component to render Markdown messages with restricted image sizes
const MarkdownMessage = ({ message }) => {
    const [displayedText, setDisplayedText] = useState(""); // Holds the progressively typed text
    const typingSpeed = 25; // Typing speed in milliseconds

    const handleTypingEffect = () => {
        typeTextWithDelay(message, setDisplayedText, typingSpeed);
    };

    // Start typing effect when the component mounts
    useEffect(() => {
        handleTypingEffect();
    }, []);
    return (
        <div className="react-chatbot-kit-chat-bot-message">
            <ReactMarkdown
                components={{
                    img: ({ node, ...props }) => (
                        <img
                            {...props}
                            style={{
                                maxWidth: "100%", // Ensure image doesn't overflow horizontally
                                maxHeight: "300px", // Restrict the max height
                                objectFit: "contain", // Ensure the image maintains its aspect ratio
                                // borderRadius: "10px", // Optional: Add rounded corners to the image
                            }}
                            alt={props.alt || "Image"}
                        />
                    ),
                }}
            >
                {displayedText}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownMessage;
