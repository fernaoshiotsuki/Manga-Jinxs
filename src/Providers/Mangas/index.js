import { createContext, useState } from "react";
import axios from "axios";
import api from "../../services";

export const MangaContext = createContext();

export const MangaProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [manga, setManga] = useState([]);

  const log = (payload) => {
    console.log(payload);

    api
      .post("/auth/login", payload)
      .then((res) => {
        setToken(res.data.token.session);
        console.log(res);
        getManga();
      })
      .catch((err) => console.log(err.message));
  };

  const getManga = () => {
    console.log("mangas");
    api
      .get("/manga")
      .then((res) => {
        console.log(res);

        setManga(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getMangaList = () => {
    console.log("list");
    api
      .get("manga/da78c294-0430-4f9f-b52c-9b8ed45f863a/aggregate")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const getMangaChapter = () => {
    console.log("chapter");
    api
      .get("chapter/213ebeb5-d498-4fb1-be11-f7a034de5e9f")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const getMangaPage = () => {
    console.log("page");
    api
      .get("at-home/server/213ebeb5-d498-4fb1-be11-f7a034de5e9f")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <MangaContext.Provider
      value={{
        api,
        log,
        token,
        getManga,
        getMangaList,
        getMangaChapter,
        getMangaPage,
      }}
    >
      {children}
    </MangaContext.Provider>
  );
};
