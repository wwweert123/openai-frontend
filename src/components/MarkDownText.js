import React from "react";
import ReactMarkdown from "react-markdown";
import "react-chatbot-kit/build/main.css";

// Custom component to render Markdown messages with restricted image sizes
const MarkdownMessage = ({ message }) => {
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
                {message}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownMessage;
