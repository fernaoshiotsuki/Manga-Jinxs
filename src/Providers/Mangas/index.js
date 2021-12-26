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
      .get(
        "manga?ids[]=37b87be0-b1f4-4507-affa-06c99ebb27f8&ids[]=a1c7c817-4e59-43b7-9365-09675a149a6f&ids[]=6a1d1cb1-ecd5-40d9-89ff-9d88e40b136b&ids[]=c52b2ce3-7f95-469c-96b0-479524fb7a1a&ids[]=46e530ce-0766-4cbd-b005-5e6fb0ba5e71&ids[]=cfc3d743-bd89-48e2-991f-63e680cc4edf&ids[]=17ce37ea-1cda-4429-b062-c4b627814225&ids[]=4f3bcae4-2d96-4c9d-932c-90181d9c873e&ids[]=e7eabe96-aa17-476f-b431-2497d5e9d060&ids[]=c086153a-0162-412a-9914-a7b2633d0cd3"
      )
      .then((res) => {
        console.log("aaa");
        setManga(res.data.data);
        console.log(res);
        setManga(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getMangaList = (id) => {
    console.log("list");
    api
      .get(`manga/${id}/aggregate?translatedLanguage[]=pt-br`)
      .then((res) => {
        console.log(res.data);
        setChapters(res.data.volumes);
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
