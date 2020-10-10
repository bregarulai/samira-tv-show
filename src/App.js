import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shows from "./pages/Shows";
import Home from "./pages/Home";
import Show from "./pages/Show";

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [searchField, setSearchField] = useState("");

  let filterShows = episodes;

  useEffect(() => {
    const onSearch = (shows) => {
      // eslint-disable-next-line
      filterShows = shows.filter((show) => {
        return show.name
          .toLocaleLowerCase()
          .includes(searchField.toLocaleLowerCase());
      });
    };

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
            />
          )}
        />
        <Route exact path="/shows/:id" component={Show} />
      </Switch>
    </Router>
  );
}

export default App;
