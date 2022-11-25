import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, LineChart } from 'recharts';


const ChartBlock=styled.div`
    .chartTitle{
        margin-bottom: 30px;
    }
`;

const Chart=()=>{
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
    ];

    return(
        <ChartBlock>
        <div className="chart">
            <h3 className="chartTitle">하단차트</h3>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
        </ChartBlock>
    );
}
export default Chart;