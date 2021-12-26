import { useContext } from "react";
import { MangaContext } from "../../Providers/Mangas";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const MangaReader = () => {
  const { data, url, getMangaPage } = useContext(MangaContext);
  const [page, setPage] = useState("");
  const [num, setNum] = useState(0);
  const [display, setDisplay] = useState(false);

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

  if (page === "") {
    setPage(
      "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/c/1/9/2c192dc4d06895bda3f2190ff32a04ca.jpg"
    );
  }
  const handlePage = () => {
    setNum(num + 1);
  };
  const handlePageBefore = () => {
    setNum(num - 1);
  };

  useEffect(() => {
    if (data.id) {
      getMangaPage(data.id);
    }
  }, [data]);

  useEffect(() => {
    if (data.attributes) {
      testURL(num);
      setDisplay(true);
    }
  }, [data, handlePage, handlePageBefore]);
  console.log(data);
  return (
    <>
      {data.attributes === undefined && <h2>Conteudo não encontrado :( </h2>}
      {display && (
        <div>
          <button onClick={() => handlePageBefore()}>Past</button>
          <img src={page} alt="image"></img>
          {num}

          <button onClick={() => handlePage()}>next</button>
        </div>
      )}
    </>
  );
};
export default MangaReader;
