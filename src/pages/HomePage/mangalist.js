import { useContext } from "react";
import { MangaContext } from "../../Providers/Mangas";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/";
import { StyledHeader } from "../../components/HeaderStyle/styles";
import {
  StyledFooter,
  StyledMain,
} from "../../components/Common Styles/styles";

const HomePage = () => {
  const history = useHistory();
  const { getManga } = useContext(MangaContext);

  useEffect(() => {
    getManga();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StyledHeader>
        <h2>Manga Jinxs</h2>
        <h4>Don't jinx it.</h4>
      </StyledHeader>

      <StyledMain>
        <p>
          Os melhores mangas da revista Shounen Jump, escolhidos a dedo para
          você.
        </p>
        <img
          src="https://tenor.com/view/jinx-arcane-arcane-jinx-gif-24130225.gif"
          alt="Jinxs"
        ></img>
        <button onClick={() => history.push("/manga")}>
          Visualizar Mangas
        </button>
      </StyledMain>

      <StyledFooter>
        <p>@Shiotsuki-2021</p>
      </StyledFooter>
    </>
  );
};
export default HomePage;
