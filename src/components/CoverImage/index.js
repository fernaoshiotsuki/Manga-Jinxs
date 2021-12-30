import { useContext } from "react";
import { MangaContext } from "../../Providers/Mangas";
import CoverContainer from "../CoverContainer";

const Image = () => {
  const covers = JSON.parse(localStorage.getItem("coverImages"));
  const mangaIds = JSON.parse(localStorage.getItem("mangasId"));
  const { getMangaList } = useContext(MangaContext);

  const showChapters = (mangaid) => {
    getMangaList(mangaid);
  };

  return (
    <>
      {covers?.map((i, index) => {
        return (
          <CoverContainer handle={showChapters} id={mangaIds[index]}>
            <img src={i.img} alt="cover"></img>
          </CoverContainer>
        );
      })}
    </>
  );
};
export default Image;
