import { useHistory } from "react-router-dom";
const ChapterContainer = ({ children, handle, id }) => {
  const history = useHistory();

  const handleClick = () => {
    handle(id);
    history.push("/manga/reader");
  };

  return <div onClick={() => handleClick()}>{children}</div>;
};
export default ChapterContainer;
