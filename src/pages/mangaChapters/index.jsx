import { useContext } from "react";
import ChapterContainer from "../../components/coverContainer/chapterContainer";
import { MangaContext } from "../../Providers/Mangas";
import { StyledChapterContainer } from "./styles";

const ChaptersList = () => {
  const { chapters, getMangaChapter } = useContext(MangaContext);
  const allChapters = [];
  const list = Object.values(chapters);
  console.log(list);
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

  return (
    <StyledChapterContainer>
      {allChapters?.map((i) => {
        return (
          <ChapterContainer id={i.id} handle={handle}>
            {" a"}
            Chapter {i.chapter}
          </ChapterContainer>
        );
      })}
    </StyledChapterContainer>
  );
};
export default ChaptersList;
