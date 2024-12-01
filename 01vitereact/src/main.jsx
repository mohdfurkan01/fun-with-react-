import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h2>My custome app!!</h2>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  /*MyApp()
  it is also a valid method to run function */
  <StrictMode>
    <MyApp />
    <App />
  </StrictMode>
);
