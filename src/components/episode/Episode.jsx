import React from "react";
import "./episode.css";
import StarRatings from "react-star-ratings";

const Episode = ({ episode }) => {
  return (
    <div className="card">
      <h3>{episode.name}</h3>
      <img src={episode.image ? episode.image.medium : null} alt="" />
      <p>{`premired: ${episode.premiered}`}</p>
      <div>
        {episode.genres.map((genre, index) => {
          return <span key={index}>{genre}</span>;
        })}
      </div>
      <StarRatings
        starRatedColor="#00b0ff"
        numberOfStars={5}
        rating={episode.rating.average ? episode.rating.average / 2 : 1}
        starDimension="15px"
        starSpacing="5px"
      />
    </div>
  );
};

export default Episode;