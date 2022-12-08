import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';

const QnaStyle = styled.div `
  .qna-top {
    /* position: relative; */
    padding: 1.5rem 2rem;
    margin-bottom: 2.5rem;
    background-color: lightgreen;
    border-radius: 0.8rem;
    border: 0.1rem solid #ecf0f6;
    box-sizing: border-box;
    width: 50rem;
    margin-top: 2rem;
    margin-left: -.5rem;
  }
  .req-button {
    width: 7rem;
    height: 3rem;
    margin-left: 5rem;
    border: none;
    background-color: beige;
    font-weight: bold;
    color: brown;
  }
  .qna-info {
    float: right;
    font-size: 16px;
    margin-right: 20px;
  }
  .qna-content {
    cursor: pointer;
    font-size: 16px;
  }
  .qna-recoment {
    color: #0F5132;
    font-weight: 500;
    font-size: 16px;
  }
  .qna-reply-wrap {
    margin-top: 2.5rem;
  }
  .qna-reply-text {
    width: 650px;
    display: inline-block;
    vertical-align: middle;
    height: 75px;
    resize: none;
    border: none;
  }
  .qna-reply-text:focus {
    outline: none;
    border: 2px solid #0F5132;
  }
  .qna-reply-button {
    float: right;
    width: 80px;
    height: 75px;
    border: none;
    background-color: yellowgreen;
  }
  .qna-reply-button-disabled {
    float: right;
    width: 80px;
    height: 75px;
    border: none;
    background-color: yellowgreen;
  }
  .qna-reply-button:hover {
    background-color: lightgreen;
    border-radius: 12rem;
    border: none;
    color: black;
    transition-property: background-color, border-radius;
    transition-duration: 3s;
  }
  .write-container {
    width: 780px;
    height: 500px;
    border: 1px solid #0F5132;
  }
  table {
    margin-top: 3rem;
    margin-left: 2rem;
  }
  .comment-info {
    font-weight: bold;
  }
  .comment-title {
    margin-top: 32px;
    height: 40px;
    width: 600px;
    border: none;
    outline: none;
  }
  .comment-disc {
    margin-top: 32px;
    width: 600px;
    height: 200px;
    resize: none;
    border: none;
    outline: none;
  }
  .comment-title:focus, .comment-disc:focus {
    border: 2px solid skyblue;
  }
  .button-tr {
    margin-top: 32px;
  }
  .write-button, .write-cancel-button {
    border: none;
    margin-top: 32px;
    width: 100px;
    height: 50px;
    background-color: skyblue;
    color: blue;
    margin-left: 10px;
    border-radius: 12rem;
  }
  .write-button:hover, .write-cancel-button:hover {
    background-color: lightblue;
  }
  z-index: 1;

`;

// Q & A
function Qna() {
  const [open, setOpen] = useState(false);
  const onClickContent = () => setOpen(!open);
  const [userName, setUserName] = useState('wlals123');
  const [write, setWrite] = useState(false);  
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([{userName:'unknown', title:'', comment:''}]);

  const onTitle = e => setTitle(e.target.value);
  const onComment = e => setComment(e.target.value);

  const onClickWrite = () => setWrite(true);
  const onClickWriteCancel = () => setWrite(false);

  const onClickWriteSubmit = () => {
    const copyCommentList = [...commentList];
    copyCommentList.push({userName:userName, title:title, comment:comment});
    setCommentList(copyCommentList);
    setTitle('');
    setComment('');
    setReplyCount(replyCount + 1);
    setWrite(false);
    setIsValid(false);
  }

  // 답변 관련
  const [reply, setReply] = useState('');
  const [replyList, setReplyList] = useState([]);
  const [replyCount, setReplyCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const onChnageText = e => setReply(e.target.value);
  const onKeyValid = e => {
    const valid = e.target.value;
    valid.length > 0 ? setIsValid(true) : setIsValid(false);
  }

  const onReply = () => {
    const copyReplyList = [...replyList];
    copyReplyList.push(reply);
    setReplyList(copyReplyList);
    setReply('');
    setReplyCount(replyCount + 1);
    setIsValid(false);
    setOpen(true);
  }

  const ReplyList = props => {
    const { userName, reply } = props;
    return(
      <div>
        <hr />
        <p className='qna-recoment'>{userName}님이 작성하신 답변입니다. | 2022.12.08</p>
        <p className="mb-0">
          {reply}
        </p>
      </div>
    );
  }
  
  const CommentList = props => {
    const { userName, title, comment } = props;
    return(
      <div>
        <Alert.Heading>{ title }<span className='qna-info'>{ userName } | 2022.12.08 | 답변 { replyCount }</span></Alert.Heading>
          <p className='qna-content' onClick={ onClickContent }>
            <i>{ comment }</i>
          </p>
      </div>
    );
  }

  return (
    <QnaStyle>
      <div className='qna'>
        <h2>꼭 읽어주세요</h2>
        <div className='text'>
        게시판 운영 규정에 어긋난다고 판단되는 게시글은 사전 통보없이 블라인드 처리될 수 있습니다.<p />
        특히 티켓 매매 및 양도의 글은 발견 즉시 임의 삭제되며 전화번호, 이메일 등의 개인정보는 악용될<p /> 
        우려가 있으므로 게시를 삼가 주시기 바랍니다. 사전 경고에도 불구하고 불량 게시물을 계속적으로<p />
        게재한 게시자의 경우 <strong>TCat</strong> 게시판 작성 권한이 제한됩니다.
        </div>
        <div className='qna-top'>
          <p>
          공연에 대해서 고객간에 자유롭게 질문/답변을 하는 공간입니다. 상품, 예매, 배송 등의 <button className='req-button' type='button' onClick={onClickWrite}>문의 하기</button><p />
          정확한 답변이 필요한 문의는 <strong>TCat</strong> 고객센터 1544-1555를 이용해주시기 바랍니다
          </p>
        </div>
      </div>
      {write ? 
      <div className='write-container'>
        <table>
          <thead>
            <tr>
              <td className='comment-info'>작성자</td>
              <td>{userName}</td>
            </tr>
          </thead>   
          <tbody>
            <tr>
              <td className='comment-info'>제목</td>
              <td><input className='comment-title' value={title} onKeyUp={onKeyValid} onChange={onTitle} type='text' /></td>
            </tr>
            <tr>
              <td className='comment-info'>문의 내용</td>
              <td><textarea className='comment-disc' value={comment} onKeyUp={onKeyValid} onChange={onComment} /></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td><button disabled={isValid ? false : true} onClick={onClickWriteSubmit} className='write-button'>등록</button></td>  
              <td><button onClick={onClickWriteCancel} className='write-cancel-button'>취소</button></td>
            </tr>
          </tfoot>
        </table>
      </div>
      :
      <div>
        <Alert variant="success">
        {commentList && commentList.map((list, i) => {
          return(
            <Alert variant="success">
            <CommentList 
              userName={list.userName}
              title={list.title}
              comment={list.comment}
              key={i}
              />
            </Alert>
          );
        })}
        {open && replyList.map((comment, i) => {
          return(
            <ReplyList
              userName={userName}
              reply={comment}
              key={i}
            />
          );
        })}
        {open &&
        <div className='qna-reply-wrap'>
          <textarea className='qna-reply-text' onChange={onChnageText} value={reply} onKeyUp={onKeyValid} /><button type='button' disabled={isValid ? false : true} onClick={onReply} className={isValid ? 'qna-reply-button' : 'qna-reply-button-disabled'}>등록</button>
        </div>
        }
        </Alert>
      </div>
      }
  </QnaStyle>
  )
};

export default Qna;