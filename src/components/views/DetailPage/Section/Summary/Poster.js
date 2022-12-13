import React, { useState } from 'react';
import styled from 'styled-components';
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
    const [isWishAdd, setIsWishAdd] = useState(false)
    const [wishCount, setWishCount] = useState(77) 

    const wishAddHandler = () => {
        setIsWishAdd(!isWishAdd)
    }

    const item_name = '태양의서커스 <뉴 알레그리아>';
    const [style, setStyle] = useState(false);

    const wishCountHandler = (e) => {
        setStyle(!style);
        wishAddHandler()
        if (!isWishAdd) {
            e.target.style.color = 'red';
            setWishCount(wishCount +1)
            fetch("url", {
                method: "POST",
                body: JSON.stringify({
                "user_id": 8,
                "product_id": 2
            })
            })
        } else if (isWishAdd) {
            e.target.style.color = 'unset';
            setWishCount(wishCount -1)
            fetch("url", {
            method: "POST",
            body: JSON.stringigy({
                "user_id": 8,
                "product_id": 2
            })
            })
        }
        e.preventDefault();
    }    

    // 별점
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
                                    <BsHeart style={{fontSize: '23px' , marginRight:'5px'}} onClick={wishCountHandler}/><span>{wishCount}</span>
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