import React from "react";
import Portal from "../components/shared/Portal";

function Home() {
  return (
    <Portal>
      <div className="container">
        <h1>This is my React Playground</h1>
        <h2>Basically, It's a site to tinker with React projects</h2>
      </div>
    </Portal>
  );
}

export default Home;
