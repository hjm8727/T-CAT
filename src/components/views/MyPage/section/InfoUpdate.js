import { useState } from "react";
import styled from "styled-components";


const InfoStyle = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
  input {
    width: 200px;
    height: 30px;
    border: 1px solid silver;
    border-radius: 10rem;
  }
  input:focus {
    background-color: #232323;
    color: #fff;
    border: 2px solid black;
  }
  button {
    margin-top: .75rem;
    border: none;
    border-radius: 10rem;
    width: 120px;
    height: 40px;
    background-color: #232323;
    color: silver;
    margin-top: 20px;
  }
`


function InfoUpdate () {
  
  const [inputPwd, setInputPwd] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const onChangePwd = e => setInputPwd(e.target.value);
  const onChangeName = e => setInputName(e.target.value);
  const onChangeEmail = e => setInputEmail(e.target.value);

  return(
    <InfoStyle>
      <div className="info-container">
        <h3>회원 정보 업데이트</h3>
        <label>아이디</label>
        <input type='text' placeholder="wlals1234" readOnly />
        <label>비밀번호</label>
        <input type='password' value={inputPwd} onChange={onChangePwd} placeholder="wlals1234" />
        <label>이름</label>
        <input type='name' value={inputName} onChange={onChangeName} placeholder="지민" readOnly />
        <label>이메일</label>
        <input type='email' value={inputEmail} onChange={onChangeEmail} placeholder="wlals@gamil.com" />
        <label>주소</label>
        <input type='address' placeholder="경기도 광주시 송정동" readOnly />
        <button>변경 확인</button>
      </div>
    </InfoStyle>
  )
}

export default InfoUpdate;