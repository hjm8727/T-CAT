import { useState } from "react";


function FindId () {

    const [inputName, setInputNme] = useState("");
    const [inputTel, setInputTel] = useState("");

    const onChangeName = e => setInputNme(e.target.value);
    const onChangeTel = e => setInputTel(e.target.value); 

    return(
            <div className="container">
                <h2>아이디 찾기</h2>
                <label>이름</label><span><input type='text' value={inputName} onChange={onChangeName}/></span>
                <p />
                <label>휴대전화</label><span><input type='tel' value={inputTel} onChange={onChangeTel} /></span>
            </div>
    )
}

export default FindId;