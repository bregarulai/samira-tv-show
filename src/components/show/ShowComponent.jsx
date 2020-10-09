import React from "react";

const ShowComponent = ({ show }) => {
  return (
    <div className="card">
      <h3> {show.name} </h3>
      <h4>{`Season ${show.season}`}</h4>
      <img src={show.image ? show.image.medium : null} alt="" />

      <p>{`Aired: ${show.airdate}`}</p>
      <p>
        {show.summary
          ? show.summary.substring(3, show.summary.length - 4)
          : null}
      </p>
    </div>
  );
};

export default ShowComponent;
