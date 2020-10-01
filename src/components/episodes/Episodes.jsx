import React from "react";
import Episode from "../episode/Episode";
import "./episodes.css";

const Episodes = ({ episodes }) => {
  return (
    <div className="cards">
      {episodes.map((episode) => {
        return <Episode key={episode.id} episode={episode} />;
      })}
    </div>
  );
};

export default Episodes;
