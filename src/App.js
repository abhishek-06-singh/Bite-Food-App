import React from "react";
import ReactDOM from "react-dom/client";

import "/index.css";
import Header from "./Header";
import Hero from "./hero/Hero";
import Main from "./main/Main";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
