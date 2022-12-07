import * as React from 'react';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { Rate } from 'antd';

import styled from "styled-components";

const ACWrap = styled.div`
width: 100%;
.add-comment {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 10px;
  animation: come-in 0.7s ease-in-out;

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
      color: black;
    }
    &::-webkit-scrollbar {
      width: 0;
    }
    &:focus {
      outline: 1.5px solid #6c757d;
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
    /* padding: 15px 30px;
    background: blue; */
    border: 0;
    /* border-radius: 10px; */
    transition: 0.3s;
    cursor: pointer;
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;

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
export default function WriteReview({ buttonValue, addComments, replyingTo }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [value, setValue] = React.useState(0);

  // function handleChange(value) {
  //     setValue(value);
  // }

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
    setOpen(false);
  };


  return (
    <div >
      <Button variant="outlined" onClick={handleClickOpen}>
        관람후기 등록
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth >
      <DialogTitle style={{position: 'relative', padding: '16px 64px 16px 16px', backgroundColor: '#f1f1f1', fontWeight: '700'}} >작품명
      <button style={{position: 'absolute', top: '15px', right: '15px', width: '30px', fontSize: '21px', fontWeight: '700', textAlign: 'center', color: '#999', backgroundColor: 'transparent', border: '0px'}} onClick={handleClose}>
        &times;
      </button></DialogTitle>
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
        {/* <DialogTitle>작품명</DialogTitle>
        <DialogContent>
        <Rate allowHalf value={value} onChange={handleChange} style={{ fontSize: '1.8rem'}}/>
        <hr/>

          <TextField
          fullWidth
          id="standard-multiline-static"
          label="관람후기"
          multiline
          rows={4}
          variant="standard"
        />
        <DialogContentText>
          <br/>
          <strong>관람후기 작성 시 유의사항</strong>
          <br/>
          <br/>
          TCat 게시판 운영 규정에 위반된다고 판단되는 글은 사전고지 없이 삭제될 수 있습니다.<br/>

          티켓 매매 및 양도, 교환의 글<br/>
          전화번호, 이메일, 주소 등 회원 및 타인의 개인정보 유출이 우려되는 경우<br/>
          욕설, 비방, 도배성 글을 작성한 경우<br/>
          명예훼손, 저작권, 초상권의 권리 침해 및 음란한 사진을 게재한 경우<br/>
          작성된 게시물의 저작권은 작성자에게 있으며, 게시물로 인해 발생하는 문제는 작성자 본인에게 책임이 있습니다.<br/>
          작성 시 유의해주시기 바랍니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>등록</Button>
          <Button onClick={handleClose}>취소</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}


