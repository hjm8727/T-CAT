import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import PayPopup from "../DetailPage/Section/Popup/PayPopup";

const PayReady = (item_name, total, tax, value) => {
  let [data, setData] = useState({
    next_redirect_pc_url: "",
    tid: "",
    params: {
      // 가맹점 코드
      cid: "TC0ONETIME",
      // 가맹점 주문번호
      partner_order_id: "partner_order_id",
      // 가맹점 회원 id
      partner_user_id: "partner_user_id",
      // 상품 이름
      item_name: item_name,
      // 상품 수량
      quantity: value,
      // 총 가격
      total_amount: total,
      // 상품 비과세
      tax_free_amount: tax,
      // 결제 성공 URL
      approval_url: "http://localhost:3000/payresult",
      // 결제 실패 URL
      fail_url: "http://localhost:3000/resultfalse",
      // 결제 취소 URL
      cancel_url: "http://localhost:3000/resultfalse"
      }
  });
    
    useEffect(() => {
        const { params } = data;
        axios({
            url: "/v1/payment/ready",
            method: "POST",
            headers: {
                Authorization: "KakaoAK d853cf82728147a7a985cfeb193f4b8d",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                },
                params,
        }).then(response => {
            const {
                data: { next_redirect_pc_url, tid },
            } = response;
            console.log(next_redirect_pc_url);
            console.log(tid);
            window.localStorage.setItem("tid", tid);
            window.localStorage.setItem('url', next_redirect_pc_url);
            setData({ next_redirect_pc_url, tid });
        }).catch(error => {
            console.log(error);
        })
    })
    // const { next_redirect_pc_url } = data;
    return (
            <div className="container">
                {/* <h2 className="head-line">카카오페이 결제하기</h2>
                <a href={ next_redirect_pc_url }><img className="kakao" src="../images/test.png" alt="카카오페이" /></a> */}
            </div>
        );
};

const PayResult = () => {
    const [modalOpen, setModalOpen] = useState(true);
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
    const navigate = useNavigate();
    const openModal = () => setModalOpen(true);
    const closeModal = () => {
      setModalOpen(false);
      navigate('/', {replace:true});
    }

    
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

    const Body = () => {
        return(
            <div>
                <h1>결제가 정상 진행 되었습니다.</h1>
                <h3>창을 닫으시면 자동으로 메인페이지로 돌아갑니다.</h3>
                <Link replace={true} to='/MyPage/RList'>결제 내역 보러가기</Link>
            </div>
        );
    }
    
    return(
        <div>
            {modalOpen && <PayPopup open={openModal} close={closeModal} body={<Body />} />}
        </div>
    );
};

const PayCancel = () => {
    const total = window.localStorage.getItem('total');
    const cancelTotal = Math.floor(total - (total / 10));
    const tax = window.localStorage.getItem('tax');
    const[data, setData] = useState({
        next_redirect_pc_url : "",
        tid: "",
        params: {
            cid: "TC0ONETIME",
            tid: window.localStorage.getItem("tid"),
            cancel_amount: cancelTotal,
            cancel_tax_free_amount:tax,
        }
    });

    useEffect(() => {
        const { params } = data;

        axios({
            url: "https://kapi.kakao.com/v1/payment/cancel",
            method: "POST",
            headers: {
                Authorization: "KakaoAK d853cf82728147a7a985cfeb193f4b8d",
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            params
        }).then(response => {
            const {
                data: { tid }
            } = response;
            setData({ tid });
            console.log(tid);
        });
    })

    return(
        <div>
            <h1>결제 취소가 완료 되었습니다.</h1>
            <Link to='/MyPage/CList'>취소 내역 확인하러 가기</Link>
            <Link to='/'>메인으로 돌아가기</Link>
        </div>
    );
};

export { PayReady, PayResult, PayCancel };