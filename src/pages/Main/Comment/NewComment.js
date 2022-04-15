import { faTrashCan, faHeart } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewComment = ({ item, handleDelte }) => {
  const handleLike = (e) => {};
  const deleteComment = (e) => {
    handleDelte(item);
  };
  return (
    <li id={item.id} className="indiComment">
      <div className="commentandBtn">
        {" "}
        <div className="commentCon">
          <p className="commentName">{item.userName}</p>
          <p className="speak">{item.said}</p>
        </div>
        <div className="commentBtnContainer">
          <button onClick={handleLike} className="commentBtn" id="likebtn">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="commentBtn" id="delete" onClick={deleteComment}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default NewComment;
