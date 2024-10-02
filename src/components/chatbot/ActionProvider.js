// in ActionProvider.jsx
import React from "react";
import axios from "axios";

// Store threadId for conversation continuity (you can use localStorage or state)
const storeThreadId = (threadId) => {
    localStorage.setItem("threadId", threadId); // Storing the threadId for future messages
};

// Retrieve stored threadId
const getThreadId = () => {
    return localStorage.getItem("threadId");
};

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage("Hello. Nice to meet you.");

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // Function to send the user's message to the backend and handle the bot's response
    const handleUserMessage = async (userInput) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/assistant",
                {
                    userInput: userInput,
                    currentThreadId: getThreadId() || null, // Send the current threadId if available
                }
            );

            const { reply, threadId: newThreadId } = response.data;

            // For each message from the bot, add it to the chat
            // messages.forEach((message) => {
            //     const botMessage = this.createChatBotMessage(message.content);
            // });
            const botMessage = createChatBotMessage(reply);
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));

            // Optionally store the threadId for future use (e.g., localStorage)
            storeThreadId(newThreadId);
        } catch (error) {
            console.error("Error communicating with OpenAI Assistant", error);
        }
    };

    const handleCat = () => {
        const botMessage = createChatBotMessage(
            "Here's a nice cat picture for you!",
            {
                widget: "catPicture",
            }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleUserMessage,
                        handleCat,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
