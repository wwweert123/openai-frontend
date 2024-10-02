import Chatbot from "react-chatbot-kit";
import config from "./components/chatbot/config";
import MessageParser from "./components/chatbot/MessageParser";
import ActionProvider from "./components/chatbot/ActionProvider";
import "./App.css";
import "react-chatbot-kit/build/main.css";

function App() {
    return (
        <div className="App">
            <div style={{ width: "25%" }}>
                <Chatbot
                    config={config}
                    actionProvider={ActionProvider}
                    messageParser={MessageParser}
                />
            </div>
        </div>
    );
}

export default App;
