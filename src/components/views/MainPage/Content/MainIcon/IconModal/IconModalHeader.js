import styled from "styled-components";

const HeaderContainer = styled.div`
        display: flex;
        justify-content: space-between;        
        margin: 0 auto;
    
`
const IconModalHeader = (props) => {
    return(
        <HeaderContainer>
            <h3>{props.title}</h3>
            <div className='HederDiv'>
            </div>            
        </HeaderContainer>
    )
}

export default IconModalHeader;