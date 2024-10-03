import { createChatBotMessage } from "react-chatbot-kit";
import CatPicture from "./CatPicture";
import MarkdownText from "../MarkDownText";

const config = {
    botName: "Assistant",
    initialMessages: [
        createChatBotMessage(
            `Hi, I'm your assistant! How can I help you today?`
        ),
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
            padding: "20px", // Increase padding for a larger message box
            fontSize: "16px", // Increase font size
            maxWidth: "80%", // Increase max width of the message box
        },
        chatButton: {
            backgroundColor: "#5ccc9d",
        },
    },
    // Use custom message component for bot messages
    customComponents: {
        botChatMessage: (props) => <MarkdownText {...props} />,
        // Disable the input field when bot is processing
        customInput: (props) => (
            <input
                type="text"
                disabled={props.isBotProcessing} // Disable input based on state
                placeholder="Write your message here..."
            />
        ),
    },
    widgets: [
        {
            widgetName: "catPicture",
            widgetFunc: (props) => <CatPicture {...props} />,
        },
    ],
};

export default config;
