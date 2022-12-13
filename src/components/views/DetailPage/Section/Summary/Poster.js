import React, { useState } from 'react';
import styled from 'styled-components';
import Star from './Star';
import { BsHeart } from "react-icons/bs";
import { Rate } from 'antd';

const PosterStyle = styled.div `
    .poster-box-bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 10px;
    }
    @media (max-width:1024px){
        .poster-box-bottom{
            margin-right: 80px;
        }
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

    const [value, setValue] = useState(3);

    function handleChange(value) {
        setValue(value);
    }

    return (
        <PosterStyle>
        {/* <div> */}
        <h3 className='summary-top'>{item_name}</h3>
            <div className='summary-body'>
                <div className='poster-box' style={{margin: '0'}}>
                    <div className='posoterConta'>
                        <img className='poster-box-top' src='test.gif' alt='포스터 이미지'/>
                            <div className='poster-box-bottom'>
                                <div>
                                    <Rate allowHalf value={value} onChange={handleChange} style={{ fontSize: '1.8rem'}}/>
                                    <span>{value}</span>
                                </div>
                                <div style={{marginRight:'20px'}}>
                                    <BsHeart style={{fontSize: '23px' , marginRight:'5px'}} onClick={onClickLike}/><span>{like}</span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </PosterStyle>
    )
}

export default Poster;