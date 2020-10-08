import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shows from "./pages/Shows";
import Home from "./pages/Home";

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [searchField, setSearchField] = useState("");
  let filterShows = [];
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
              onSearch={onSearch(episodes)}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
