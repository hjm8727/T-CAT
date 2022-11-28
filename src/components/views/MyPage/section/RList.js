import React from 'react';
import { Table, Divider } from 'antd';

// 컬럼명 맞춰서 API 문서 만들면 됨
const columns = [
    {
        title: '예매일',
        dataIndex: 'Rdate',
    },
    {
        title: '예매번호',
        dataIndex: 'Rnum',
    },
    {
        title: '공연명',
        dataIndex: 'name',
    },
    {
        title: '관람일',
        dataIndex: 'date',
    },
    {
        title: '매수',
        dataIndex: 'count',
    },
    {
        title: '상태',
        dataIndex: 'detail',
    },
];
const data = [
    {
        key: '1',
        Rdate: '2022.11.28',
        Rnum: 'T2200902901R1',
        name: '태양의서커스〈뉴 알레그리아〉',
        date: '2022.11.30',
        count: '1매',
        detail: <button>상세보기</button>
    },
    {
        key: '2',
        Rdate: '2022.11.28',
        Rnum: 'T2200922601R1',
        name: '마틸다',
        date: '2022.11.30',
        count: '1매',
        detail: <button>상세보기</button>
    },                                    
];
const RList = () => (
    <>
    <Divider>예매 내역</Divider>
    <Table columns={columns} dataSource={data} size="middle" />
    </>
);
export default RList;