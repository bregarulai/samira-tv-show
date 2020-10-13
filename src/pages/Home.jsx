import React from "react";
import Layout from "../components/layout/Layout";
import "./home.css";

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Samira TV Shows</h1>
        <p>
          A website where you can search for your favorite tv shows. You can
          browse through all available shows or search for a particular show.
          Click on any show to see more information about that show.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
