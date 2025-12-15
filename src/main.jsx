import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SolanaWalletProvider } from "./components/SolanaWalletProvider";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <SolanaWalletProvider>
            <Provider store={store}>

                <App />
            </Provider>
        </SolanaWalletProvider>
    </BrowserRouter>
);
