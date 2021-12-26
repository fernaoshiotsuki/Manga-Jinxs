import axios from "axios";
import { useContext, useState } from "react/";
import { MangaContext } from "../Providers/Mangas";
import { useEffect } from "react";

import { useHistory } from "react-router-dom/";
import { StyledHeader } from "./Header/styles";
import { StyledFooter, StyledMain } from "./styles";
const Manga = () => {
  const history = useHistory();
  const {
    getManga,
    getMangaList,
    getMangaChapter,
    getMangaPage,
    manga,
    chapters,
    url,
    data,
  } = useContext(MangaContext);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState("");
  const [num, setNum] = useState(0);
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

  const testURL = (num) => {
    console.log(num);
    axios
      .get(`${url}/data/${data.attributes.hash}/${data.attributes.data[num]}`)
      .then((res) => {
        console.log(res.config.url);
        setPage(res.config.url);
      })
      .catch((err) => console.log(err));
    console.log(
      `${url}data/${data.attributes.hash}/${data.attributes.data[1]}`
    );
    handlePage();
  };

  const mangaSelect = () => {
    const list = manga?.map((item) => {
      return item.id;
    });
    setSelected(list);
    console.log(list);
    return list;
  };

  const chapterSelect = () => {
    const IdArray = [];
    for (let info in chapters) {
      console.log(chapters[info].id);
      IdArray.push(chapters[info].id);
    }
    return IdArray;
  };
  useEffect(() => {
    mangaSelect();
  }, []);
  const handlePage = () => {
    setNum(num + 1);
  };

  console.log(manga);
  console.log(chapters[3]?.id);
  console.log(selected);
  console.log(data);
  console.log(url);

  useEffect(() => {
    getManga();
  }, []);

  return (
    <>
      <StyledHeader>
        <h2>Manga Jinxs</h2>
        <h4>Don't jinx it.</h4>
      </StyledHeader>

      <StyledMain>
        <p>
          Os melhores mangas da revista Shounen Jump, escolhidos a dedo para
          você.
        </p>
        <img src="https://tenor.com/view/jinx-arcane-arcane-jinx-gif-24130225.gif"></img>
        <button onClick={() => history.push("/manga")}>
          Visualizar Mangas
        </button>
      </StyledMain>

      <StyledFooter>
        <p>@Shiotsuki-2021</p>
      </StyledFooter>
    </>
  );
};
export default Manga;
/* <div>
          <img src="https://tenor.com/view/jinx-jamming-gif-24016964.gif"></img>
        </div> */
