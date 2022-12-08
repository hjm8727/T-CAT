import { async } from '@firebase/util';
import React, { useState } from 'react';
import AdminApi from '../../../../api/AdminApi';
import './qnaModal.css';
// import '../App';
// import './Modal.css';

const QnaModal = (props) => {
    const [inputReply, setInputReply] = useState("");
    // 문의 답장 값을 담아줌
    const onChangeReply=(e)=>{setInputReply(e.target.value);}

    // 문의 답장 전송 호출
    const onClickReply=async(e)=>{
      if(inputReply.length <= 5 || inputReply.length >= 1000) {
        alert('문의 사항을 최소 5 ~ 1000글자 이내로 부탁드립니다.');
        e.preventDefault();
    } else {
      const sendReply = await AdminApi.sendReply(props.index,inputReply);
      console.log(sendReply.data);
        // if(sendReply.data.statusCode === 200) {
        //     alert('문의가 정상 전송 되었습니다.');
        // } else {
        //     alert('문의 전송이 실패 하였습니다.');
        //     e.preventDefault();
        // }
    }

}

    const { open, close, header ,submit} = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open && 
                <section>
                    <header>
                        {header}
                        <button className='close' onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                      {props.children}
                      <input value={inputReply} onChange={onChangeReply}/>
                    </main>
                    <footer>
                    {submit &&
                        <button className='submit' onClick={submit}>Submit</button>
                    }
                        <button className='close' onClick={close}>close</button>
                        <button className='submit' onClick={onClickReply}>Submit</button>

                    </footer>
                </section>
            }
        </div>
    );
};
export default QnaModal;