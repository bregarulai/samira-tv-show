import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ShowsComponent from "../components/show/ShowsComponent";
import "./show.css";

const Show = ({ show }) => {
  const [shows, setShows] = useState([]);
  let tempShow = [];
  useEffect(() => {
    console.log(show.id);
    fetch(`http://api.tvmaze.com/shows/${show.id}/episodes`)
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
      });
  }, []);
  return (
    <Layout>
      <div className="hero">
        <img src={show.image ? show.image.medium : null} alt="" />
        <div className="text">
          <h3>{show.name} is working </h3>
          <p>
            {show.summary
              ? show.summary.substring(3, show.summary.length - 4)
              : null}
          </p>
          <h5>schedule</h5>
          <p>
            {show.schedule ? show.schedule.days[0] : null}s at{" "}
            {show.schedule ? show.schedule.time : null}
          </p>
        </div>
      </div>
      <Link id="goback-link" to="/shows">
        {" "}
        Go back{" "}
      </Link>
      <div>
        <ShowsComponent shows={shows} />
      </div>
      <div>
        <Link id="goback-link" to="/shows">
          {" "}
          Go back{" "}
        </Link>
      </div>
    </Layout>
  );
};

export default Show;
