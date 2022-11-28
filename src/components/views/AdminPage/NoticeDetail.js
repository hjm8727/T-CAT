import styled from "styled-components";
import TopBar from "./Tool/TopBar";

const DetailBlock=styled.div`
    margin : 0 auto;
    width: 100vw;
    
    .title{
        padding: 15px;
        width: 100%;
        dt , dd{
        display: inline-block;
        vertical-align: middle;
        font-size: 1.4rem;
     }
        dt{
        width: 100px;
    }
        input{
    padding: 10px;
    width: 700px;
    height: 30px;
    }
}
`;

const NoticeDetail=()=>{
    return(
        <>
        <DetailBlock>
            <TopBar name="공지사항 상세보기"/>
            <div className="boardWrap">
                <div className="boardWriteWrap">
                    <div className="boardWrite">
                        <div className="title">
                            <dl>
                                <dt>제목</dt>
                                <dd><input type="text" placeholder="제목을 입력하세요"/></dd>
                            </dl>
                        </div>

                        <div className="content">
                            {/* <textarea placeholder="내용 입력"/> */}
                        </div>
                    </div>
                </div>
            </div>
        </DetailBlock>
        </>
    )
}
export default NoticeDetail;