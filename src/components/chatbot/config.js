import { createChatBotMessage } from "react-chatbot-kit";
import CatPicture from "./CatPicture";
import MarkdownText from "../MarkDownText";
import BotAvatar from "../BotAvatar";

const config = {
    botName: "OpenAI Cat Assistant",
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
        botAvatar: (props) => <BotAvatar {...props} />,
    },
    widgets: [
        {
            widgetName: "catPicture",
            widgetFunc: (props) => <CatPicture {...props} />,
        },
    ],
};

export default config;
