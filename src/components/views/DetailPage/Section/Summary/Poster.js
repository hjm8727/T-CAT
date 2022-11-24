import React from 'react';
import styled from 'styled-components';
import Star from './Star';

const PosterStyle = styled.div `
    .like {
        margin-right: 4rem;
    }
`;

function Poster() {
    return (
        <PosterStyle>
    <div>
    <h2 className='summary-top'>태양의서커스 ＜뉴 알레그리아＞</h2>
        <div className='summary-body'>
            <div className='poster-box' style={{margin: '0'}}>
                <img className='poster-box-top' src='test.gif' alt='포스터 이미지'/>
                <div className='poster-box-bottom'>
                    <span className='like' onClick={(() => {alert("성공")})}>❤</span>
                    <Star/> <span>9.5</span>
                </div>
            </div>
        </div>
    </div>
    </PosterStyle>
    )
}

export default Poster;