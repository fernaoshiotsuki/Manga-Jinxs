import { Switch, Route } from "react-router-dom";

import ChaptersList from "../pages/MangaChaptersList";
import MangaReader from "../pages/DisplayChapter";
import HomePage from "../pages/HomePage/mangalist";
import MangasDisplay from "../pages/MangasDisplay";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/manga">
        <MangasDisplay />
      </Route>
      <Route exact path="/manga/chapters">
        <ChaptersList />
      </Route>
      <Route exact path="/manga/reader">
        <MangaReader />
      </Route>
    </Switch>
  );
};
export default Routes;
