import "./Content.sass";
import Upper from "./Content/Upper";
import Middle from "./Content/Middle";
import Lower from "./Content/Lower";
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
