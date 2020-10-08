import React from "react";
import Episodes from "../components/episodes/Episodes";
import Layout from "../components/layout/Layout";
import SearchBox from "../components/searchBox/SearchBox";

const Shows = ({ onSearch, onSearchChange, episodes }) => {
  return (
    <Layout>
      <SearchBox onSearch={onSearch} onSearchChange={onSearchChange} />
      <Episodes episodes={episodes} />
    </Layout>
  );
};

export default Shows;
