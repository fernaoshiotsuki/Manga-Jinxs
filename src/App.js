import "./App.css";

import Login from "./components/login";
import Manga from "./components/mangalist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Manga />
      </header>
    </div>
  );
}

export default App;
