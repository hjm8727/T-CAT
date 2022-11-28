import React, { useState } from 'react';
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = ( props ) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  let [fullAddress, setFullAddress] = useState("");
  const [address, setAddress] = useState("");
  const onChangeAddress = e => setAddress(e.target.value);
  const handlePostCode = (data) => {
        // let fullAddress = data.address;
        setFullAddress(data.address);
        let extraAddress = '';
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        console.log(`데이터 ${data.address}`);
        // 주소
        console.log(fullAddress);
        // 우편번호
        console.log(data.zonecode);
        // 도
        console.log(data.sido);
        // 군 시
        console.log(data.sigungu);
        // 동
        console.log(data.bname);
        // 도로명 주소
        console.log(data.roadAddress);
        // 팝업 닫기
        // props.onClose();

    }

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "2%",
        width: "500px",
        height: "500px",
        padding: "7px",
      };

    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
             {/* 닫기 버튼 생성 */}
            {/* <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button> */}
            <input type='text' readOnly value={fullAddress}/>
            <p />
            <input type='text' value={address} onChange={onChangeAddress} placeholder='상세 주소 입력' />
        </div>
    );
}

export default PopupPostCode;