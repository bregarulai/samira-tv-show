import React from "react";
import Episode from "../episode/Episode";
import "./episodes.css";

const Episodes = ({ episodes, handleClickItem }) => {
  return (
    <div className="cards">
      {" "}
      {episodes.map((episode) => {
        return (
          <Episode
            key={episode.id}
            episode={episode}
            handleClickItem={handleClickItem}
          />
        );
      })}
    </div>
  );
};

export default Episodes;
