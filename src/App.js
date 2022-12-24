import { useState } from "react";
import "./App.css";

function App() {
  const [rotate, setRotate] = useState(true);

  const up = {
    transform: "rotate(-25deg)",
    transition: "transform 2s",
  };

  const down = {
    transform: "rotate(25deg)",
    transition: "transform 2s",
  };

  const flashLightStyle = {
    opacity: "1",
    transition: "opacity 4s",
    background:
      "linear-gradient(90deg, rgba(184,172,172,1) 0%, rgba(41,37,37,1) 50%)",
  };

  const noFlashLightStyle = {
    opacity: "0.3",
    transition: "opacity 4s",
  };

  const handlePassword = () => {
    setRotate(false);
  };

  return (
    <div className="main">
      <img className="img" alt="dark" src="dark.webp" />
      <form className="form" autoComplete="off">
        <img
          className="flashlight"
          style={rotate ? up : down}
          alt="flashlight"
          src="flashlight.png"
        />

        <section className="section">
          <input
            className="input"
            style={rotate ? flashLightStyle : noFlashLightStyle}
            type="text"
            autoFocus
            placeholder="Username"
            onClick={() => setRotate(true)}
          />
          <input
            className="input no-flashlight"
            type="password"
            style={rotate ? noFlashLightStyle : flashLightStyle}
            placeholder="Password"
            onClick={handlePassword}
          />
        </section>
      </form>
    </div>
  );
}

export default App;
