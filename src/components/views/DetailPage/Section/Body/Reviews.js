import { Rate } from 'antd';
import React, { useState } from 'react';

// 관람 후기
function Reviews() {
    const [value, setValue] = useState(0);

    function handleChange(value) {
        setValue(value);
    }

    return (
    <div className='content-area'>
        <div className='review-box'>
            <div className='tab-area'>
                <div className='type-main'>
                    <div>
                        <ul role="tablist" className='tab-list'>
                            <li className='tab' role='tab' aria-selected='true' data-tab='audience'>
                                <a nocr onclick="goOtherTCR(this, 'a=nco_x0a*A.tabsubvisitor&r=1&i=1800009D_000001B8AA91');return false;" href='#'>
                                    <span className='menu'>관람객</span>
                                </a>
                            </li>
                            <li className='tab' role='tab' data-tab='my'>
                                <a nocr onclick="goOtherTCR(this, 'a=nco_x0a*A.tabsubmy&r=1&i=1800009D_000001B8AA91');return false;" href='#'>
                                <span className='menu'>MY</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='_content' data-tab='audience' style={{dispaly: 'block'}}>
                <div className='review-wrap'>
                    <p className='intro'>
                        <strong className='intro-title'>
                            <span className='bg'></span>
                            <span className='intro-text'>후기</span>
                        </strong>
                        <span className='text-desc'>별점을 선택해 주세요.</span>
                    </p>
                    <div className='star-select'>
                        <div className='icon-box'>
                        <Rate allowHalf value={value} onChange={handleChange} style={{ fontSize: '1.8rem'}}/>
                        <span> {value}</span>
                        </div>
                        <div className="text_box_star_text" style={{display: 'inline-block'}}></div>
                    </div>
                    <div className="form-intro-box">
                        <div className="area_input_box">
                            <input type="text" className="this_input_write" placeholder="감상평을 등록해주세요."/>
                        </div> 
                        <button type="button" class="this_button_write">등록</button> 
                    </div>
                </div>


            </div>
        </div>
    </div>
    )
}

export default Reviews;