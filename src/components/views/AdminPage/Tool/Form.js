import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const ReplyBlock=styled.div`
    width: 80%;
    margin: 15px auto;
    .reply{
        height: 100px;
    }
`;

const ReplyForm=()=> {
    const [ inputReply, setInputReply] = useState("");

    console.log(inputReply);
    const onChangeReply=(e)=>{
      setInputReply(e.target.value);
    }

    const submitReply=async()=>{
        console.log(inputReply);
    }
  return (
    <ReplyBlock>
      <Form.Group className="title">
        <Form.Label>문의 내용</Form.Label>
        <Form.Control placeholder="환불요청" disabled />
      </Form.Group>
      <Form.Group className="title">
        <Form.Label >
            <div value={inputReply} onChange={onChangeReply}>
                답장
            </div>
            답변하기</Form.Label>
        <Form.Control className='reply' />
      </Form.Group>
      <button onClick={submitReply}>전송</button>
    </ReplyBlock>
  );
}

export default ReplyForm;