import styled from "styled-components";
import Card from 'react-bootstrap/Card';

const RecentBlock=styled.div`
    .container{
        display: flex;
        margin: 10px;
        text-align: center;
    }
`;
const RecentComment=()=>{
    return(
    <RecentBlock>
    <div className="container">
    <Card style={{ width: '14rem', height: '350px', margin : "10px"}}>
        <Card.Img src={process.env.PUBLIC_URL + '/images/TCat.jpg'} />
        <Card.Body>
            <Card.Title>전시회 제목</Card.Title>
            <Card.Text>
                후기 
            </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '14rem', height: '350px', margin : "10px"}}>
        <Card.Img src={process.env.PUBLIC_URL + '/images/TCat.jpg'} />
        <Card.Body>
            <Card.Title>전시회 제목</Card.Title>
            <Card.Text>
                후기 
            </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '14rem', height: '350px',margin : "10px"}}>
        <Card.Img src={process.env.PUBLIC_URL + '/images/TCat.jpg'} />
        <Card.Body>
            <Card.Title>전시회 제목</Card.Title>
            <Card.Text>
                후기 
            </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </RecentBlock>
    );
}
export default RecentComment;