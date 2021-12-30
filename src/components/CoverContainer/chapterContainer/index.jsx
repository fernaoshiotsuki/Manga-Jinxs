const ChapterContainer = ({ children, handle, id }) => {
  const handleClick = () => {
    handle(id);
  };

  return <div onClick={() => handleClick()}>{children}</div>;
};
export default ChapterContainer;
