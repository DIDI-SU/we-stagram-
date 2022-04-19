import Header from "../../components/Header";
import Content from "./Content.js";
import SideContent from "./SideContent";
import "./Main.sass";
const Main = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          {" "}
          <Content />
        </div>
        <SideContent />
      </main>
    </>
  );
};

export default Main;
