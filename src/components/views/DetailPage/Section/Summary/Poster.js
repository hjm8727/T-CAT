import React, { useState } from 'react';
import styled from 'styled-components';
import Star from './Star';
import { BsHeart } from "react-icons/bs";

const PosterStyle = styled.div `
    .like {
        margin-right: 4rem;
    }
`;

// 상세페이지 상단 포스터
function Poster() {
    const item_name = '태양의서커스 <뉴 알레그리아>';
    const [like, setLike] = useState(0);
    const [style, setStyle] = useState(false);
    const onClickLike = e => {
        setStyle(!style);
        if(style === false){
            e.target.style.color = 'red';
            setLike(like + 1);
        } else {
            e.target.style.color = 'unset';
            setLike(like - 1);
        }
        e.preventDefault();
    }

    return (
        <PosterStyle>
        <div>
        <h3 className='summary-top'>{item_name}</h3>
            <div className='summary-body'>
                <div className='poster-box' style={{margin: '0'}}>
                    <img className='poster-box-top' src='test.gif' alt='포스터 이미지'/>
                    <div className='poster-box-bottom'>
                        <span className='like'><BsHeart style={{fontSize: '20px'}} onClick={onClickLike}/>{like}</span>
                        <Star/> <span>9.5</span>
                    </div>
                </div>
            </div>
        </div>
        </PosterStyle>
    )
}

export default Poster;