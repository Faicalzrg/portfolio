import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ ici seulement
import { Provider } from "react-redux";

import App from "./App.jsx";
import { store } from "./state/store.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/portfolio">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
