import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shows from "./pages/Shows";
import Home from "./pages/Home";
import Show from "./pages/Show";

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [show, setShow] = useState({});
  const [showId, setShowId] = useState("");
  let filterShows = episodes;

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        onSearch(data);
        setEpisodes(filterShows);
      });
  }, [filterShows]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleClickItem = (show) => {
    setShow(show);
    setShowId(show.id);
  };

  const onSearch = (shows) => {
    filterShows = shows.filter((show) => {
      return show.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
  };

  return (
    <Router className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/shows"
          exact
          render={(props) => (
            <Shows
              {...props}
              episodes={filterShows}
              onSearchChange={onSearchChange}
              handleClickItem={handleClickItem}
            />
          )}
        />
        <Route exact path="/shows/:id" component={Show} />
      </Switch>
    </Router>
  );
}

export default App;
