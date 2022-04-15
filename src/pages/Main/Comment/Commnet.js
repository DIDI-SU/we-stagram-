import "./Comment.sass";
import {
  faTrashCan,
  faHeart,
  faLaughWink,
} from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import NewComment from "./NewComment";
const Comment = () => {
  const [editing, setEditing] = useState("");
  const [comment, setComment] = useState([
    {
      id: 1,
      userName: "undifined",
      said: "예시문",
      like: false,
    },
  ]);
  const commentInputRef = useRef();
  const randomId = new Date().getUTCMilliseconds();
  const onChange = (e) => {
    setEditing(e.target.value);
  };
  const addComment = (text) => {
    const newUser = {
      id: randomId,
      userName: "undifined",
      said: text,
      like: false,
    };

    setComment([...comment, newUser]);
    console.log(comment);
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      addComment(editing);
      setEditing("");
    }
  };

  const deleteComment = (item) => {
    const filterdItem = comment.filter((items) => items.id !== item.id);

    setComment(filterdItem);
  };

  return (
    <section>
      <div className="comment">
        <ul>
          {comment.map((item) => (
            <NewComment handleDelte={deleteComment} item={item} />
          ))}
        </ul>
      </div>
      <div className="writing">
        <div>
          <FontAwesomeIcon icon={faLaughWink} />
        </div>
        <input
          ref={commentInputRef}
          onChange={onChange}
          onKeyDown={onEnter}
          className="commentinput"
          type="text"
          placeholder="댓글 달기..."
          value={editing}
        />
        <button className="submitBtn">게시</button>
      </div>
    </section>
  );
};

export default Comment;
