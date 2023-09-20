import React from "react";
import ReactDOM from "react-dom/client";

import "/index.css";
import Header from "./Header";
import Hero from "./hero/Hero";
import Main from "./main/Main";
import Restro from "./res/Restro";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Restro />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
