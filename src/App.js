import React, { useEffect, useState } from "react";
import "./App.css";
import Episodes from "./components/episodes/Episodes";

function App() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setEpisodes(data));
  }, []);
  return (
    <div className="App">
      <Episodes episodes={episodes} />
    </div>
  );
}

export default App;
