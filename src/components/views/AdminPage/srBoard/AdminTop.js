import styled from "styled-components"

const TopChartContainer = styled.div`
    width: 100%;
    border: 1px solid black;
    ul{
        margin:0;
    }
    li{
        margin: 0 100px;
        display: flex;
        justify-content: space-between;
        list-style: none;
    }
    h4{
        font-size: 24px;
    }
    .itemContainer{
        /* border: 1px solid black; */
    }
    .info{
        display: flex;
        justify-content: center;
    }
`

const TopChartItem =[
    {
        title : "누적금액",
        info : "2,000,000"
    },
    {
        title : "총 회원 수",
        info : "200000명"
    },
    {
        title : "누적 예매 수",
        info : "12490820회"
    }
]

const AdminTop = () =>{
    return(
        <TopChartContainer>
            <ul>
                <li>
                    {TopChartItem.map ( c =>(
                    <div className="itemContainer">
                        <h4>{c.title}</h4>
                        <div className="info">
                        <p>{c.info}</p>
                        </div>
                    </div>
                    ))}                    
                </li>
                
            </ul>            
        </TopChartContainer>
    )
}

export default AdminTop