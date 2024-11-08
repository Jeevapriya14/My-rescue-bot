import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './chatbot.jpg'; // Adjust this path
import chatbot from './chatbot_image.png';

const Home = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  const arrayOfPossibleMessage = [
    { message: "hi", response: "hello" },
    { message: "how are you", response: "I'm good" },
    { message: "what is your name?", response: "I'm a chatbot" }
  ];

  // Function to send the user's message
  const sendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'You', text: message }
    ]);
  };

  // Function for the chatbot's response
  const chatbotResponse = (userMessage) => {
    let chatbotMessage = '';
    
    if (userMessage.length > 5 || userMessage.toLowerCase() === "hi") {
      const result = arrayOfPossibleMessage.filter(val =>
        val.message.toLowerCase().includes(userMessage.toLowerCase())
      );
      
      if (result.length > 0) {
        chatbotMessage = result[0].response;
      } else {
        chatbotMessage = "Please send another message.";
      }
    } else {
      chatbotMessage = "Please send a different message.";
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'Chatbot', text: chatbotMessage }
    ]);
  };

  // Handle send button click
  const handleSendMessage = () => {
    if (userMessage.trim() === "") {
      alert("Please type in a message");
    } else {
      const userMessageText = userMessage.trim();
      setUserMessage(''); // Clear the input field
      sendMessage(userMessageText);
      chatbotResponse(userMessageText);
    }
  };

  return (
    <div
      className="head"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      {/* Navbar Component */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h2 className="text-center">Chatbot App</h2>
        <div className="media" style={{ height: "100px" }}>
          <img
            src={chatbot}
            style={{ float: "left", margin: "10px" }}
            className="rounded-circle float-left img-thumbnail"
            width={45}
            alt=""
          />
          <div className="media-body" style={{ float: "left" }}>
            <h5 style={{ margin: "10px", marginTop: "15px" }}>Chatbot</h5>
            <span style={{ marginLeft: "10px", color: "rgb(32,199,32)" }}>
              Online
            </span>
          </div>
        </div>

        <div
          id="chatContainer"
          className="container border overflow-auto"
          style={{ height: "290px" }}
        >
          {/* Render messages dynamically */}
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                textAlign: message.sender === "You" ? "right" : "left",
                margin: "10px",
              }}
            >
              <span>{message.sender}: </span>
              <span>{message.text}</span>
            </div>
          ))}
        </div>

        <div className="input-group">
          <input
            id="textbox"
            style={{border:"solid 1px black",backgroundColor:"whitesmoke",borderRadius:"10px"}}
            type="text"
            className="form-control"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)} // Update input value in state
          />
          <div className="input-group-append">
            <button
              
              id="sendBtn"
              type="button"
              className="btn btn-primary"
              onClick={handleSendMessage} // Trigger send message
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
