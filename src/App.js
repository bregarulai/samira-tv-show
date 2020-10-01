import React, { useEffect, useState } from "react";
import "./App.css";
import Episodes from "./components/episodes/Episodes";
import Navigation from "./components/navigation/Navigation";
import SearchBox from "./components/searchBox/SearchBox";

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [searchField, setSearchField] = useState("");
  let filterShows = "";
  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const onSearch = (shows) => {
    filterShows = shows.filter((show) => {
      return show.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
  };

  return (
    <div className="App">
      <Navigation />
      <SearchBox
        onSearch={onSearch(episodes)}
        onSearchChange={onSearchChange}
      />
      <Episodes episodes={filterShows} />
    </div>
  );
}

export default App;
