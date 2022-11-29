import styled from "styled-components";
import NavBar from "./Tool/TopBar";

const InquiryBlock=styled.div`
  .container{
    border: 1px solid black;
  }
`;

const Inquiry=()=>{
    return(
        <InquiryBlock style={{width : '100vw'}}>
        <NavBar name="큐앤에이 관리"/>
          <div className="container">
              
          </div>
        </InquiryBlock>
    );

}
export default Inquiry;