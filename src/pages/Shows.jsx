import React from "react";
import Episodes from "../components/episodes/Episodes";
import Layout from "../components/layout/Layout";
import SearchBox from "../components/searchBox/SearchBox";

const Shows = ({ onSearchChange, episodes }) => {
  return (
    <Layout>
      <SearchBox onSearchChange={onSearchChange} />
      <Episodes episodes={episodes} />
    </Layout>
  );
};

export default Shows;
