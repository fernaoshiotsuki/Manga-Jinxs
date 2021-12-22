import "./App.css";

import Manga from "./components/mangalist";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import ChaptersList from "./pages/mangaChapters";
import MangaReader from "./pages/DisplayChapter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Manga />
          </Route>
          <Route exact path="/manga">
            <Home />
          </Route>
          <Route exact path="/manga/chapters">
            <ChaptersList />
          </Route>
          <Route exact path="/manga/reader">
            <MangaReader />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
