import React from 'react';
import Star from './Star';

function Poster() {
    return (
    <div>        
    <h3 className='summary-top'>태양의서커스 ＜뉴 알레그리아＞</h3>
    <div className='summary-body'>
        <div className='poster-box' style={{margin: '0'}}>
            <img className='poster-box-top' src='test.gif' alt='포스터 이미지'/>
        <div className='poster-box-bottom'>
            <Star/> <span>9.5</span>
        <div className='like' onClick={(() => {alert("성공")})}>❤</div>
    </div>
    </div>
    </div></div>
    )
}

export default Poster;