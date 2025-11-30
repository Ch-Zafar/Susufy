import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SolanaWalletProvider } from "./components/SolanaWalletProvider";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <SolanaWalletProvider>
            <App />
        </SolanaWalletProvider>
    </BrowserRouter>
);
