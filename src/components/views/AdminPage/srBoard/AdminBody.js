import styled from "styled-components"
import Chart from "./AdminBody/Chart"
import Profile from "./AdminBody/ProFile"

const AdminBodyContainer = styled.div`
    display: flex;
    width: 100%;
    /* border: 1px solid black; */
    height: 500px;
`
const AdminBody = () =>{
    return(
        <AdminBodyContainer>
            <Chart/>
            <Profile/>
        </AdminBodyContainer>
    )
}

export default AdminBody