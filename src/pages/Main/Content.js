import "./Content.sass";
import Upper from "./MainContent/Upper";
import Middle from "./MainContent/Middle";
import Lower from "./MainContent/Lower";
import Comment from "./Comment/Commnet";
import { useEffect, useState } from "react";

const Content = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data/feedData.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setFeed(data));
  }, []);
  return (
    <>
      {feed.map((item) => {
        return (
          <article className="contentContainer">
            <Upper userName={item.userName} src={item.src} />
            <Middle src={item.src} />
            <Lower nickname={"keroppi"} num={5} />
            <Comment nickname={item.userName} num={5} comment={item.text} />
          </article>
        );
      })}
    </>
  );
};

export default Content;
