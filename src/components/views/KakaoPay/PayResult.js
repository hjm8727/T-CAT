import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import PayPopup from "../DetailPage/Section/Popup/PayPopup";

const PayResult = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(true);
    const openModal = () => setModalOpen(true);
    const closeModal = () => {
      setModalOpen(false);
      navigate('/', {replace:true});
    }

    const Body = () => {
        return(
            <div>
                <h1>결제가 정상 진행 되었습니다.</h1>
                <h3>창을 닫으시면 자동으로 메인페이지로 돌아갑니다.</h3>
                <Link replace={true} to='/MyPage/RList'>결제 내역 보러가기</Link>
            </div>
        )
    }

    let search = window.location.search;
    const [state, setState] = useState({
        params: {
            cid: "TC0ONETIME",
            tid : window.localStorage.getItem("tid"),
            partner_order_id: "partner_order_id",
            // 가맹점 회원 id
            partner_user_id: "partner_user_id",
            // 결제승인 요청을 인정하는 토큰
            pg_token: search.split("=")[1],
        }
    });
    
    useEffect(() => {
        const { params } = state;

        axios({
            url: "https://kapi.kakao.com/v1/payment/approve",
            method: "POST",
            headers: {
                Authorization: "KakaoAK d853cf82728147a7a985cfeb193f4b8d",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params,
        }).then(response => {
            console.log(response);
        });
    });
    return(
        <div>
            {modalOpen && <PayPopup open={openModal} close={closeModal} body={<Body />} />}
        </div>
    )
}
export default PayResult;