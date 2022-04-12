import Card from "../../../components/Card";

const Story = (props) => {
  const data = [
    {
      userName: "keroppi",
      src: "/images/room.png",
      text: "mushroom님외 2명이 팔로우..",
      follow: true,
    },
    {
      userName: "mushroom",
      src: "/images/mushroom.png",
      text: "mushroom님외 2명이 팔로우..",
      follow: true,
    },
    {
      userName: "pompom",
      src: "/images/covid.PNG",
      text: "mushroom님외 2명이 팔로우..",
      follow: true,
    },
    {
      userName: "pompom",
      src: "/images/covid.PNG",
      text: "mushroom님외 2명이 팔로우..",
      follow: true,
    },
    {
      userName: "pompom",
      src: "/images/covid.PNG",
      text: "mushroom님외 2명이 팔로우..",
      follow: true,
    },
  ];
  return (
    <section class="story">
      <div className="titleDiv">
        <p>{props.title}</p>
        <p>{props.info}</p>
      </div>
      {data.map((item) => (
        <Card userName={item.userName} time={item.time} src={item.src} />
      ))}
    </section>
  );
};

export default Story;
