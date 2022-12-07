import React from 'react';
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

  z-index: 1;

`;

// Q & A
function Qna() {
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
          공연에 대해서 고객간에 자유롭게 질문/답변을 하는 공간입니다. 상품, 예매, 배송 등의 <button className='req-button'>문의 하기</button><p />
          정확한 답변이 필요한 문의는 <strong>TCat</strong> 고객센터 1544-1555를 이용해주시기 바랍니다
          </p>
        </div>
      </div>
    </QnaStyle>
    
  )
};

export default Qna;