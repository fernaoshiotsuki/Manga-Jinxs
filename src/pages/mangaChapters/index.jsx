import { useContext } from "react";
import ChapterContainer from "../../components/coverContainer/chapterContainer";
import { MangaContext } from "../../Providers/Mangas";

const ChaptersList = () => {
  const { chapters, getMangaChapter } = useContext(MangaContext);
  const list = Object.values(chapters);
  console.log(list);

  const handle = (chapterId) => {
    getMangaChapter(chapterId);
  };

  return (
    <div>
      {list?.map((i) => {
        return (
          <ChapterContainer id={i.id} handle={handle}>
            {" "}
            Chapter {i.chapter}
          </ChapterContainer>
        );
      })}
    </div>
  );
};
export default ChaptersList;
