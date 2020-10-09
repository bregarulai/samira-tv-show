import React from "react";
import ShowComponent from "./ShowComponent";

const ShowsComponent = ({ shows }) => {
  return (
    <div className="cards">
      {" "}
      {shows.map((show) => {
        return <ShowComponent key={show.id} show={show} />;
      })}
    </div>
  );
};

export default ShowsComponent;
