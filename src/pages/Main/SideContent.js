import "./Content.sass";
import Card from "../../components/Card";
import Story from "./SideContent/Story";
import Recommend from "./SideContent/Recommand";
const SideContent = () => {
  return (
    <>
      {" "}
      <article className="sideContainer">
        <Card
          userName={"Keroppi"}
          content={"I love frog"}
          src={"/images/room.png"}
        />
        <Recommend title={"회원님을 위한 추천"} info={"모두 보기"} />
        <section class="sideInfo">
          <div>
            소개‐도움말‐홍보 센터‐API‐채용 정보‐개인정보처리방침‐약관‐위치‐인기
            계정‐해시태그‐언어
          </div>
          <div>© 2022 WESTAGRAM</div>
        </section>
      </article>
    </>
  );
};

export default SideContent;
