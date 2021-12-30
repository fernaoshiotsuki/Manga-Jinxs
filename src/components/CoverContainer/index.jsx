import { useHistory } from "react-router-dom";
import api from "../../services";

const CoverContainer = ({ children, handle, id }) => {
  const history = useHistory();

  const handleClick = () => {
    handle(id);
    api
      .get(`manga/${id}`)
      .then((res) => {
        localStorage.setItem("mangaData", JSON.stringify(res.data.data));
      })
      .then(() => history.push("/manga/chapters"))
      .catch((err) => console.log(err));
  };

  return <div onClick={() => handleClick()}>{children}</div>;
};
export default CoverContainer;
