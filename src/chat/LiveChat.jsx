import React, { useState } from "react";
import axios from "axios";
import "./LiveChat.css";

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAIResponse = async (userMessage) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/chat", { message: userMessage }, {
        headers: { "Content-Type": "application/json" },
      });

      return response.data.reply;
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, I couldn't process your request.";
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (input.trim() !== "") {
      const userMessage = { text: input, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");

      const aiResponse = await fetchAIResponse(input);
      const botMessage = { text: aiResponse, sender: "bot" };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  return (
    <div className="live-chat-container">
      <h2 className="chat-header">Live Chat Support</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="chat-message bot">Typing...</div>}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
