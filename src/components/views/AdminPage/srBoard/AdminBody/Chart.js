import styled from "styled-components"
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '10월',
    수익: 4000,
    회원: 2400,
    예매: 3000,
    amt: 2400,
  },
  {
    name: '11월',
    수익: 3000,
    회원: 1398,
    예매: 2210,
    amt: 2300,
  },
  {
    name: '12월',
    수익: 1000,
    회원: 1500,
    예매: 2000,
    amt: 2300,
  },
];

const ChartContainer=styled.div`
    width: 80%;
    border-radius: 20px;
    background-color: white;
    margin: 10px;
`;
export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
     <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
        //   width={500}
        //   height={300}
          data={data}
          margin={{
            top: 10,
            // right: 30,
            // left: 20,
            // bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="수익" fill="skyblue" />
          <Bar dataKey="회원" fill="olive" />
          <Bar dataKey="예매" fill="orange" />
        </BarChart>
      </ResponsiveContainer>
      </ChartContainer>

    );
  }
}


// const ChartContainer = styled.div`
//     width: 80%;
//     border: 1px solid black;
// `

// const Chart = () =>{
//     return(
//         <ChartContainer>
//             <p>차트 영역 입니다</p>


//         </ChartContainer>        
//     )
// }

// export default Chart;