import React from 'react';

function Info() {
    return (
    <div>
    <ul class="info" style={{listStyle: 'none'}}>
        <li class="infoItem">
            <strong class="infoLabel">장소</strong>
        <div class="infoDesc">
            <a class="infoBtn" data-popup="info-place" role="button" href="#">
            대성 디큐브아트센터
            </a>
        </div>
        </li>

        <li class="infoItem">
            <strong class="infoLabel">공연기간</strong>
        <div class="infoDesc">
            <p class="infoText">2022.10.05 ~2023.02.26</p></div>
        </li>

        <li class="infoItem"><strong class="infoLabel">공연시간</strong>
            <div class="infoDesc"><p class="infoText">160분(인터미션 15분 포함)</p>
            </div>
        </li>

        <li class="infoItem">
            <strong class="infoLabel">관람연령</strong>
            <div class="infoDesc"><p class="infoText">8세이상 관람가능</p></div>
        </li>

        <li class="infoItem infoPrice">
            <strong class="infoLabel">가격</strong>
        <div class="infoDesc">
            <ul class="infoPriceList" style={{listStyle: 'none'}}>
                <li class="infoPriceItem is-largePrice">
                </li>
                <li class="infoPriceItem">
                    <span class="name">VIP석</span>
                    <span class="price">150,000원</span>
                </li>
                <li class="infoPriceItem">
                    <span class="name">OP석</span>
                    <span class="price">140,000원</span>
                </li>
                <li class="infoPriceItem">
                    <span class="name">R석</span>
                    <span class="price">130,000원</span>
                    </li>
                <li class="infoPriceItem">
                    <span class="name">S석</span>
                    <span class="price">100,000원</span>
                </li>
                <li class="infoPriceItem">
                    <span class="name">A석</span>
                    <span class="price">70,000원</span>
                </li>
            </ul>
        </div>
        </li>
    </ul>
    </div>
    )
}

export default Info;