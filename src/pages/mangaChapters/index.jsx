import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ChapterContainer from "../../components/coverContainer/chapterContainer";
import { MangaContext } from "../../Providers/Mangas";
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
  const allChapters = [];
  const list = Object.values(chapters);

  const mangaData = JSON.parse(localStorage.getItem("mangaData")) || null;
  console.log(mangaData);

  list.map((chap) => {
    return Object.values(chap.chapters).map((i) => {
      return allChapters.push(i);
    });
  });
  allChapters.sort((a, b) => {
    return a.chapter - b.chapter;
  });
  console.log(allChapters);
  const handle = (chapterId) => {
    getMangaChapter(chapterId);
  };

  const coverList = JSON.parse(localStorage.getItem("coverImages"));
  const ThisCover = coverList.filter((coverImg) => {
    return coverImg.img.includes(mangaData.id);
  });

  console.log(ThisCover[0]);
  return (
    <>
      <StyledChapterHeader>
        <button onClick={() => history.push("/")}>Home</button>
        <button onClick={() => history.push("/manga")}>Voltar</button>
        <h2>{Object.values(mangaData.attributes.title)}</h2>
        <h4> Status: {mangaData.attributes.status}</h4>
      </StyledChapterHeader>

      <StyledMain>
        <div>{ThisCover && <img src={ThisCover[0].img}></img>}</div>
        <StyledChapterContainer>
          {allChapters?.map((i) => {
            return (
              <ChapterContainer id={i.id} handle={handle}>
                {" "}
                Chapter {i.chapter}
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
