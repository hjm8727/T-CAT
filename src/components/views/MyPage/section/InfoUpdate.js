import styled from "styled-components";


const InfoStyle = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }
`
  

function InfoUpdate () {
  return(
    <InfoStyle>
      <div className="info-container">
        <h3>회원 정보 업데이트</h3>
        <label>아이디</label>
        <input type='text' placeholder="wlals1234" readOnly />
        <label>비밀번호</label>
        <input type='password' placeholder="wlals1234" />
        <label>이름</label>
        <input type='name' placeholder="지민" readOnly />
        <label>이메일</label>
        <input type='email' placeholder="wlals@gamil.com" />
        <label>주소</label>
        <input type='address' placeholder="경기도 광주시 송정동" readOnly />
        <button>변경 확인</button>
      </div>
    </InfoStyle>
  )
}

export default InfoUpdate;