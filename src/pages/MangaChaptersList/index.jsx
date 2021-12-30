import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MangaContext } from "../../Providers/Mangas";
import ChapterContainer from "../../components/CoverContainer/chapterContainer";
import {
  StyledChapterContainer,
  StyledChapterHeader,
  StyledFooter,
  StyledMain,
  StyledSection,
} from "./styles";

const ChaptersList = () => {
  const history = useHistory();
  const { chapters, getMangaChapter } = useContext(MangaContext);
  const coverList = JSON.parse(localStorage.getItem("coverImages"));
  const mangaData = JSON.parse(localStorage.getItem("mangaData")) || "";
  const allChapters = [];
  const list = Object.values(chapters);

  list.map((chap) => {
    return Object.values(chap.chapters).map((i) => {
      return allChapters.push(i);
    });
  });

  allChapters.sort((a, b) => {
    return a.chapter - b.chapter;
  });

  const handle = (chapterId) => {
    getMangaChapter(chapterId);
  };

  const ThisCover = coverList.filter((coverImg) => {
    return coverImg.img.includes(mangaData.id);
  });

  return (
    <>
      <StyledChapterHeader>
        <button onClick={() => history.push("/")}>Home</button>
        <button onClick={() => history.push("/manga")}>Voltar</button>
        <h2>{Object.values(mangaData.attributes.title)}</h2>
        <h4> Status: {mangaData.attributes.status}</h4>
      </StyledChapterHeader>

      <StyledMain>
        <div>
          {ThisCover && <img src={ThisCover[0].img} alt="coverImg"></img>}
        </div>
        <StyledChapterContainer>
          {allChapters?.map((i) => {
            return (
              <ChapterContainer id={i.id} handle={handle}>
                Capitulo {i.chapter}
              </ChapterContainer>
            );
          })}
        </StyledChapterContainer>
      </StyledMain>

      <StyledSection>
        <p> Descrição(em ingles): {mangaData.attributes.description.en}</p>
      </StyledSection>

      <StyledFooter> @Shiotsuki-2021</StyledFooter>
    </>
  );
};
export default ChaptersList;
