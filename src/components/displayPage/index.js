import { useContext } from "react/cjs/react.development";
import { MangaContext } from "../../Providers/Mangas";
import CoverContainer from "../coverContainer";

const Image = ({ payload }) => {
  const covers = JSON.parse(localStorage.getItem("coverImages"));
  console.log(payload);
  const { getMangaList, manga } = useContext(MangaContext);
  const showChapters = (mangaid) => {
    getMangaList(mangaid);
  };
  const mangaInfo = manga.map((item) => {
    return {
      id: item.id,
    };
  });

  return (
    <>
      {covers?.map((i, index) => {
        return (
          <CoverContainer handle={showChapters} id={mangaInfo[index].id}>
            <img src={i.img}></img>
            {index}
          </CoverContainer>
        );
      })}
    </>
  );
};
export default Image;
