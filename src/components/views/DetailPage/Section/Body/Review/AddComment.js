import { useState } from "react";
import styled from "styled-components";

const ACWrap = styled.div`
width: 100%;
// 아래작성란
.add-comment {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* width: 90%; */
  padding: 20px;
  background: white;
  border-radius: 10px;
  animation: come-in 1.5s ease-in-out;

  .comment-input {
    position: relative;
    height: 100px;
    border: 2px solid lightgray;
    color: $dark-blue;
    border-radius: 10px;
    padding: 15px 25px;
    resize: none;
    scrollbar-width: none;
    &::placeholder {
      color: darkblue;
    }
    &::-webkit-scrollbar {
      width: 0;
    }
    &:focus {
      outline: 1.5px solid blue;
    }
  }

  .send-btn-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .add-btn {
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding: 15px 30px;
    background: blue;
    border: 0;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
    &:hover,
    &:focus{
      opacity: 0.65;
    }
  }

  @include media-md() {
    width: 735px;
    flex-direction: row;
    padding: 25px;
    gap: 25px;
    .comment-input {
      width: 100%;
    }
    .send-btn-container {
      align-items: flex-start;
    }
  }
}

@keyframes come-in {
  0%{
    opacity: 0;
    transform: translateY(-100%);
  }
  75%{
    opacity: 0;
    transform: translateY(-50%);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
`

const AddComment = ({ buttonValue, addComments, replyingTo }) => {
  const replyingToUser = replyingTo ? `@${replyingTo}, ` : "";
  const [comment, setComment] = useState("");

  const clickHandler = () => {
    if (comment === "" || comment === " ") return;

    const newComment = {
      id: Math.floor(Math.random() * 100) + 5,
      content: replyingToUser + comment,
      createdAt: new Date(),
      username: "하정목",
      currentUser: true,
      replies: [],
    };

    addComments(newComment);
    setComment("");
  };

  return (
    <ACWrap>
    <div className="add-comment">
      <textarea
        className="comment-input"
        placeholder="댓글을 작성해 보세요."
        value={replyingToUser + comment}
        onChange={(e) => {
          setComment(
            e.target.value.replace(replyingTo ? `@${replyingTo}, ` : "", "")
          );
        }}
      />
      <div className="send-btn-container">
        <button className="add-btn" onClick={clickHandler}>
          {buttonValue}
        </button>
      </div>
    </div>
    </ACWrap>
  );
};

export default AddComment;
