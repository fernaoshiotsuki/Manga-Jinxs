import { createContext, useState } from "react";

import api from "../../services";

export const MangaContext = createContext();

export const MangaProvider = ({ children }) => {
  const [token, setToken] = useState([]);
  const [manga, setManga] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
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
      .get("/manga?ids[]=4f3bcae4-2d96-4c9d-932c-90181d9c873e")
      .then((res) => {
        setManga(res.data.data);
        console.log(res);
        setManga(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getMangaList = (id) => {
    console.log("list");
    api
      .get(`manga/${id}/aggregate`)
      .then((res) => {
        console.log(res.data);
        setChapters(res.data.volumes.none.chapters);
      })
      .catch((err) => console.log(err));
  };

  const getMangaChapter = (chapterId) => {
    console.log("chapter");
    api
      .get(`chapter/${chapterId}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getMangaPage = (id) => {
    console.log("page");
    api
      .get(`at-home/server/${id}`)
      .then((res) => {
        console.log(res);
        setUrl(res.data.baseUrl);
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
        manga,
        chapters,
        url,
        data,
      }}
    >
      {children}
    </MangaContext.Provider>
  );
};
