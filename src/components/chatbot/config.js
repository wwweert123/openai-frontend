import { createChatBotMessage } from "react-chatbot-kit";
import CatPicture from "./CatPicture";

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
        },
        chatButton: {
            backgroundColor: "#5ccc9d",
        },
    },
    widgets: [
        {
            widgetName: "catPicture",
            widgetFunc: (props) => <CatPicture {...props} />,
        },
    ],
};

export default config;
