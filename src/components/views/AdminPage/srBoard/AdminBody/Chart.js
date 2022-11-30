import styled from "styled-components"

const ChartContainer = styled.div`
    width: 80%;
    border: 1px solid black;
`

const Chart = () =>{
    return(
        <ChartContainer>
            <p>차트 영역 입니다</p>
        </ChartContainer>        
    )
}

export default Chart;