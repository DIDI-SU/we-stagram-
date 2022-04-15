import "./Content.sass";
import Upper from "./MainContent/Upper";
import Middle from "./MainContent/Middle";
import Lower from "./MainContent/Lower";
import Comment from "./Comment/Commnet";
const Content = () => {
  return (
    <>
      <article className="contentContainer">
        <Upper />
        <Middle />
        <Lower nickname={"keroppi"} num={5} />
        <Comment />
      </article>
    </>
  );
};

export default Content;
