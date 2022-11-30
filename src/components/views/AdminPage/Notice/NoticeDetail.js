import styled from "styled-components";
import TopBar from "../Tool/TopBar";
import { useNavigate} from "react-router-dom";


const DetailBlock=styled.div`
   margin:0 auto;
  box-sizing: border-box;
    .container{
        margin: 0 auto;
        position: relative;
        width: 100vw;
    margin : 10px;
    display: flex;
    border: 1px solid black;
    height: 60%;
    flex-direction: column;
    text-align: center;
    padding: 3rem;
    }
    .topTitle{
        overflow: hidden;
        border-top: 1px solid black;
        border-bottom: 1px solid #dae0e9;
        height: 70px;
        padding: 0 20px;
        line-height: 70px;
    }
    .title{
        float: left;
        hover{
            cursor: pointer;
            background-color: red;
        }
    }
    .date{
        float: right;
    }
    .content{
        display: block;
        height: 500px;
        border-bottom: 1px solid #dae0e9;
    }
    .buttonWrap{
        text-align: center;
        justify-content: center;
    }
    button{
      border: none;
      margin: 15px 0;
      margin: 20px 10px;
      background-color: #E3CAA5;
      border-radius: 5px;
      width: 150px;
      height: 50px;
    }
   
`;

const NoticeDetail=()=>{
  const navigate = useNavigate();

    return(
        <>
        <DetailBlock>
            <TopBar name="공지사항 상세보기"/>
                <div className="container">
                    <div className="topTitle">
                        <p className="title">제목</p>
                        <p className="date">작성자 | 작성날짜</p>
                    </div>
                    <div className="content">
                    어제부터 시작된 기록적인 폭우로 인하여 도로 및 지하철이 침수되는 일이 발생하고 있습니다.

금일 폭우로 인해 지각한 훈련생들은 다음 2가지 서류를 제출하면 정상출석으로 인정받을 수 있습니다.

 
<br/>
1. 뉴스보도기사/ 신문기사/ 안전안내문자

2. 신분증(실제 그 지역에 거주하는지 확인용도) 

 

위 서류를 직권신청 문서와 함께 담당 행정직원에게 메일로 제출하시면 됩니다.(오늘까지 제출 필수)

 

 

또한 이번 주 내내 많은 비가 예상되어 등원이 어려울 수 있으므로, 12일(금)까지는 모든 과정을 원격훈련으로 운영하기로 하였습니다.​

원격훈련으로 진행하는 과정에서 일부 집체로 등원하는 훈련생들이 있으나, 이번 주까지는 이를 지양하고 원격훈련으로 참여를 권장합니다. 

 

 

감사합니다.

                    </div>
                </div>
                <div className="buttonWrap">
                    <button onClick={()=>{navigate('/admin/noticeList')}}>목록으로</button>
                </div>
        </DetailBlock>
        </>
    )
}
export default NoticeDetail;