import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ConversationProvider } from "./context/conversationContext";
import { SocketContextProvider } from "./context/socketContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ConversationProvider>
      <BrowserRouter>
        <SocketContextProvider>
          <App />
          <ToastContainer />
        </SocketContextProvider>
      </BrowserRouter>
    </ConversationProvider>
  </AuthProvider>
);
