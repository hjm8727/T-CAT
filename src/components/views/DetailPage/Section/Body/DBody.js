import React from 'react';
import { Tabs } from 'antd';
import Contents from './Contents';
import Qna from './Qna';
import Reviews from './Reviews';

// 상세 페이지 바디
function DBody() {
    return (
        <div style={{width: '100%', height: '100rem', zIndex: '-1'}}>
        <Tabs defaultActiveKey="1" style={{position: 'sticky', top: '0'}} >
            <Tabs.TabPane tab="공연정보" key="1">
                <Contents/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="관람후기" key="2">
                <Reviews/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Q&A" key="3">
                <Qna/>
            </Tabs.TabPane>
        </Tabs>
        </div>
    )
}

export default DBody;
