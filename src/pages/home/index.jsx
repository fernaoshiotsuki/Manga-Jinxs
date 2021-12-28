import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Image from "../../components/displayPage";
import { StyledHeader } from "../../components/Header/styles";
import { MangaContext } from "../../Providers/Mangas";
import { StyledFooter } from "../mangaChapters/styles";
import { StyledDiv } from "./styles";
const Home = () => {
  const history = useHistory();
  const { manga } = useContext(MangaContext);
  const [coversState, setCoversState] = useState(false);
  const images = [];

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
        console.log(res.data.data.attributes.fileName);

        coverImg(id, res.data.data.attributes.fileName);
      })
      .catch((err) => console.log(err));
  };

  mangaInfo.map((obj) => {
    return getCover(obj.id, obj.cover[0].id);
  });

  const coverImg = (id, cover) => {
    images.push({
      img: `https://uploads.mangadex.org/covers/${id}/${cover}.256.jpg`,
    });
    if (images.length === 10) {
      localStorage.setItem("coverImages", JSON.stringify(images));
      setCoversState(true);
    }
  };

  return (
    <>
      <StyledHeader>
        <button onClick={() => history.push("/")}> Home</button>
      </StyledHeader>
      <StyledDiv>{coversState && <Image payload={images} />}</StyledDiv>
      <StyledFooter>@Shiotsuki-2021</StyledFooter>
    </>
  );
};
export default Home;
