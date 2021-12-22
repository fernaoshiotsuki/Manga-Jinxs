import { useContext } from "react";
import { MangaContext } from "../../Providers/Mangas";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const MangaReader = () => {
  const { data, url, getMangaPage } = useContext(MangaContext);
  const [page, setPage] = useState("");
  const [num, setNum] = useState(0);
  const testURL = (num) => {
    console.log(num);
    axios
      .get(`${url}/data/${data.attributes.hash}/${data.attributes.data[num]}`)
      .then((res) => {
        console.log(res.config.url);
        setPage(res.config.url);
      })
      .catch((err) => console.log(err));
    console.log(data.attributes.data);
  };
  const handlePage = () => {
    setNum(num + 1);
    testURL(num);
  };
  const handlePageBefore = () => {
    setNum(num - 1);
    testURL(num);
  };
  useEffect(() => {
    getMangaPage(data.id);
  }, [data]);

  useEffect(() => {
    if (data.attributes) {
      testURL(num);
    }
  }, []);

  return (
    <>
      {data && (
        <div>
          <img src={page} alt="image"></img>
          {num}
          <button onClick={() => handlePageBefore()}>Past</button>
          <button onClick={() => handlePage()}>next</button>
        </div>
      )}
    </>
  );
};
export default MangaReader;
