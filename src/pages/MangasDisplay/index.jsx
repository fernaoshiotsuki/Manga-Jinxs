import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Image from "../../components/CoverImage";
import { StyledHeader } from "../../components/HeaderStyle/styles";
import { MangaContext } from "../../Providers/Mangas";
import { StyledFooter } from "../MangaChaptersList/styles";
import { StyledDiv } from "./styles";

const MangasDisplay = () => {
  const history = useHistory();
  const { manga } = useContext(MangaContext);
  const [coversState, setCoversState] = useState(false);
  const images = [];
  const ids = [];

  const mangaInfo = manga.map((item) => {
    return {
      id: item.id,
      cover: item.relationships.filter((i) => {
        return i.type === "cover_art";
      }),
    };
  });

  const getCover = (id, coverId) => {
    axios
      .get(`https://api.mangadex.org/cover/${coverId}`)
      .then((res) => {
        coverImg(id, res.data.data.attributes.fileName);
      })
      .catch((err) => console.log(err));
  };

  mangaInfo.map((obj) => {
    console.log(obj.cover[0].id);
    return getCover(obj.id, obj.cover[0].id);
  });

  const coverImg = (id, cover) => {
    images.push({
      img: `https://uploads.mangadex.org/covers/${id}/${cover}.256.jpg`,
    });
    ids.push(id);
    if (images.length === 10) {
      localStorage.setItem("coverImages", JSON.stringify(images));
      localStorage.setItem("mangasId", JSON.stringify(ids));
      setCoversState(true);
    }
  };

  return (
    <>
      <StyledHeader>
        <button onClick={() => history.push("/")}> Home</button>
      </StyledHeader>

      <StyledDiv>{coversState && <Image payload={images} />}</StyledDiv>

      <StyledFooter>
        <p>@Shiotsuki-2021</p>
      </StyledFooter>
    </>
  );
};
export default MangasDisplay;
