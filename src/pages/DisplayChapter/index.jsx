import axios from "axios";
import { useContext } from "react";
import { MangaContext } from "../../Providers/Mangas";
import { useState } from "react";
import { useEffect } from "react";
import { StyledHeader } from "../../components/Header/styles";
import { StyledFooter } from "../../components/styles";
import { StyledPage } from "./styles";
import { useHistory } from "react-router-dom";

const MangaReader = () => {
  const history = useHistory();
  const { data, url, getMangaPage } = useContext(MangaContext);
  const [page, setPage] = useState("");
  const [num, setNum] = useState(0);
  const [display, setDisplay] = useState(false);

  const getPageURL = (num) => {
    console.log(num);
    axios
      .get(`${url}/data/${data.attributes.hash}/${data.attributes.data[num]}`)
      .then((res) => {
        console.log(res.config.url);
        setPage(res.config.url);
      })
      .catch((err) => console.log(err));
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
      getPageURL(num);
      setDisplay(true);
    }
  }, [data, handlePage, handlePageBefore]);
  console.log(data);
  return (
    <>
      {data.attributes === undefined && <h2>Conteudo não encontrado :( </h2>}
      {display && (
        <>
          <StyledHeader>
            <button onClick={() => history.push("/")}>Home</button>
            <button onClick={() => history.push("/manga")}>Mangas</button>
            <button onClick={() => history.push("/manga/chapters")}>
              Capitulos
            </button>
          </StyledHeader>

          <StyledPage>
            <img src={page} alt="image"></img>
          </StyledPage>

          <StyledFooter>
            <button onClick={() => handlePageBefore()}>Past</button>
            <p>{num}</p>
            <button onClick={() => handlePage()}>next</button>
          </StyledFooter>
        </>
      )}
    </>
  );
};
export default MangaReader;
