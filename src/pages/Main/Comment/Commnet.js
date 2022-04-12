import "./Comment.css";
import {
  faTrashCan,
  faHeart,
  faLaughWink,
} from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

const NewComment = ({ nickName, finalcomment }) => {
  const onDelte = (e) => {};
  return (
    <li className="indiComment">
      <div className="commentandBtn">
        {" "}
        <div className="commentCon">
          <p className="commentName">{nickName}</p>
          <p className="speak">{finalcomment}</p>
        </div>
        <div className="commentBtnContainer">
          <button className="commentBtn" id="likebtn">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button onClick={onDelte} className="commentBtn" id="delete">
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </li>
  );
};

const Comment = () => {
  const [nickName, setnickName] = useState("pompom");
  const [finalcomment, setFinalComment] = useState("말랑말랑");
  const [editing, setEditing] = useState("");
  const [comment, setComment] = useState([]);
  const commentInputRef = useRef();
  const onChange = (e) => {
    setEditing(e.target.value);
  };
  const addComment = (text) => {
    setComment((comment) => [...comment, text]);
    console.log(comment);
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      addComment(editing);
      // console.log(comment);
      setEditing("");
    }
  };

  return (
    <section>
      <div className="comment">
        <ul>
          <NewComment nickName={nickName} finalcomment={finalcomment} />
          {comment.map((item) => (
            <NewComment nickName={nickName} finalcomment={item} />
          ))}
        </ul>
      </div>
      <div class="writing">
        <div>
          <FontAwesomeIcon icon={faLaughWink} />
        </div>
        <input
          ref={commentInputRef}
          onChange={onChange}
          onKeyDown={onEnter}
          class="commentinput"
          type="text"
          placeholder="댓글 달기..."
          value={editing}
        />
        <button class="submitBtn">게시</button>
      </div>
    </section>
  );
};

export default Comment;
