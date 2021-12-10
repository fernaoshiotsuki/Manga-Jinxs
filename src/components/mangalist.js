import axios from "axios";
import { useContext } from "react/cjs/react.development";
import { MangaContext } from "../Providers/Mangas";

const Manga = () => {
  const {
    getManga,
    manga,
    token,
    getMangaList,
    getMangaChapter,
    getMangaPage,
  } = useContext(MangaContext);

  const imgURL = () => {
    axios
      .get(
        "https://uploads.mangadex.org/data/7db2165cb782c5972bc4da89c8ece477/1-cd03345aa0f18ff7aafe5e84299baa01092e748768e9a302438d6a56e791766e.jpg"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div></div>
      <button onClick={() => getManga()}>view</button>
      <button onClick={() => getMangaList()}>List</button>
      <button onClick={() => getMangaChapter()}>List</button>

      <button onClick={() => getMangaPage()}>List</button>
      <button onClick={() => imgURL()}>List</button>
      <a href="https://uploads.mangadex.org/${token}/data/d6f1b177e76eab0b010abcae75f58e50/1-de47e09e245d95ac2829bbd3e199fe1d9381092fc33616136e2584e6a3cda3dc.jpg">
        aaaaaaa
      </a>
    </>
  );
};
export default Manga;
