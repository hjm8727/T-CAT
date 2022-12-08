import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../../../../../util/Modal/Modal';
import MapModalBody from './MapModal';

const InfoStyle = styled.div`
    div {
        margin-top: 4rem;
    }
    .infoDesc {
        margin: 0;
        margin-left: 1.5rem;
    }
    .price {
        color: #ED4037;
        margin-left: 1.5rem;
    }
    .priceA {
        color: #ED4037;
        margin-left: 2.25rem;
    }
    .hr {
        border-bottom: 1px solid black;
        width: 20rem;
        margin: 0;
        margin-right: 15rem;
        margin:1.5rem 0;
    }
`;

// 상세페이지 상단 공연 정보
function Info() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () =>{
        setModalOpen(true)
    }
    const closeModal = () =>{
        setModalOpen(false)
    }

    return (
        <InfoStyle>
        <div>
            <ul class="info" style={{listStyle: 'none'}}>
                <li class="infoItem">
                    <strong class="infoLabel">장소</strong>
                <span class="infoDesc">
                    <a class="infoBtn" href='' data-popup="info-place" role="button" onClick={openModal}>
                    대성 디큐브아트센터
                    </a>
                </span>
                </li>
                <p />
            
                <li class="infoItem">
                    <strong class="infoLabel">공연기간</strong>
                    <span span class="infoDesc">
                    <span class="infoText">2022.10.05 ~2023.02.26</span>
                </span>
                </li>
                <p />

                <li class="infoItem"><strong class="infoLabel">공연시간</strong>
                    <span class="infoDesc">
                        <span class="infoText">160분(인터미션 15분 포함)</span>
                    </span>
                </li>
                <p />

                <li class="infoItem">
                    <strong class="infoLabel">관람연령</strong>
                    <span class="infoDesc">
                        <span class="infoText">8세이상 관람가능</span>
                    </span>
                </li>
                <p />
                <div className='hr'>
                </div>
            
                <li class="infoItem infoPrice">
                    <strong class="infoLabel">가격</strong>
                    <div class="infoDesc">
                        <ul class="infoPriceList" style={{listStyle: 'none'}}>
                            <li class="infoPriceItem is-largePrice">
                            </li>
                            <li class="infoPriceItem">
                                <span class="name">VIP석</span>
                                <span class="price">150,000원</span>
                            </li> <p />
                            <li class="infoPriceItem">
                                <span class="name">OP석</span>
                                <span class="price">140,000원</span>
                            </li> <p />
                            <li class="infoPriceItem">
                                <span class="name">R석</span>
                                <span class="priceA">130,000원</span>
                            </li> <p />
                            <li class="infoPriceItem">
                                <span class="name">S석</span>
                                <span class="priceA">100,000원</span>
                            </li> <p />
                            <li class="infoPriceItem">
                                <span class="name">A석</span>
                                <span class="priceA">70,000원</span>
                            </li> <p />
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <Modal open={modalOpen} close={closeModal} header={"찾아오시는 길"}><div>{<MapModalBody/>}</div></Modal>
        </InfoStyle>
    )
}

export default Info;