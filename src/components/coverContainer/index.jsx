import { useHistory } from "react-router-dom";

const CoverContainer = ({ children, handle, id }) => {
  const history = useHistory();

  const handleClick = () => {
    handle(id);
    history.push("/manga/chapters");
  };

  return <div onClick={() => handleClick()}>{children}</div>;
};
export default CoverContainer;
