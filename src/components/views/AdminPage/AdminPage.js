import React, { Children } from 'react'
import {Routes, Route, useNavigate} from "react-router-dom";
import {Menu} from 'antd';
// import "antd/dist/antd.min.css";
import {HomeOutlined, PoweroffOutlined,UserOutlined,SolutionOutlined,LayoutOutlined,BulbOutlined} from "@ant-design/icons/lib/icons";
import MemberList from './MemberList';
import AdminHome from './AdminHome';
import BlackList from './BlackList';
import styled from 'styled-components';
import Notice from './Notice';
import PostManagement from './PostManagement';
import Banner from './Banner';
import Inquiry from './Inquiry';

const AdminBlock=styled.div`
  .top {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
  }
  .center{
    display: flex;
    flex-direction: row;
    flex: 1;
  }
`;
const HeaderBlock=styled.div`
  height: 65px;
  background-color: #E3CAA5;
  color: black;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  .logoContainer{
    float: left;
  }
  .Logo{
        width   :150px;
        height: 50px;
        margin: 3px 15px;
        padding: 0px;
    }
`;
function AdminPage() {
  return (
    <AdminBlock>
    <div className='top'>
      <Header/>
      <div className='center'>
        <SideMenu/>
        <Content/>
      </div>
      <Footer/>
    </div>
    </AdminBlock>
  );
}
function Header() {
  return(
    <HeaderBlock>
      <div className='logoContainer'><img className="Logo" src="/imges/TCat.jpg" alt=''></img></div>
    </HeaderBlock>
    // <HeaderBlock/>
  );
}
function Footer() {
  return(
    <HeaderBlock/>
  );
}
function SideMenu() {
  const navigate = useNavigate();
  return(
    <Menu 
      onClick={({key})=>{
        if(key === "로그아웃"){
          // 로그아웃일 때 
        } else{
          navigate(key);
        }
      }}
      // 사이드바 클릭하면 주소 url값 변경되게 
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        {label:"Home", key:"/admin/home",icon:<HomeOutlined/>},
        {label:"회원관리", key:"/admin/member", 
          children:[{label : "일반회원", key:"/admin/normal"},
                    {label : "블랙리스트", key:"/admin/black"}], icon:<UserOutlined/>},
        {label:"게시물관리", key:"/admin/enroll", icon:<LayoutOutlined />},
        {label:"광고관리", key:"/admin/ad", icon:<BulbOutlined />},
        {label:"공지사항 관리", key:"/admin/notice", icon:<SolutionOutlined/>},
        {label:"1대1 문의", key:"/admin/inquiry", icon:<SolutionOutlined/>},
        {label:"로그아웃", key:'로그아웃', icon:<PoweroffOutlined/>,danger:true},
    ]}>
      </Menu>
  );
}
function Content() {
  return(
    <>
    <Routes>
      <Route path='/home' element={<AdminHome/>}/>
      <Route path='/normal' element={<MemberList/>}/>
      <Route path='/black' element={<BlackList/>}/>
      <Route path='/enroll' element={<PostManagement/>}/>
      <Route path='/ad' element={<Banner/>}/>
      <Route path='/notice' element={<Notice/>}/>
      <Route path='/inquiry' element={<Inquiry/>}/>
    </Routes>
    </>
  );
}
export default AdminPage;