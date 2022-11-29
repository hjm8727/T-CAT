import {Routes, Route} from "react-router-dom";
import FindId from "./components/views/FindIdPage/FindId";
import FindPwd from "./components/views/FindPwdPage/FindPwd";
import Login from "./components/views/LoginPage/Login";
import Sign from "./components/views/SignPage/Sign";
import KakaoPay from "./components/views/KakaoPay/KakaoPay";
import Detail from "./components/views/DetailPage/Detail";
import MyPage from "./components/views/MyPage/MyPage";
import MainPage from "./components/views/MainPage/MainPage";
import AdminHome from "./components/views/AdminPage/AdminHome";
// import MainPage from "./components/views/MainPage/MainPage";
// import KLT from "./components/views/KakaoLogin/KLT";


function App() {
  return (
    <>
      {/* JM 지민 */}
      {/* <MainPage/> */}
    <Routes>
      
      <Route path='/' element={<MainPage/>}/>
      <Route path='/adminhome' element={<AdminHome/>}/>
      <Route path='/MyPage/*' element={<MyPage/>}/>
      <Route path='/sign' element={<Sign />} />
      <Route path='/kakaopay/*' element={<KakaoPay/>}/>
      <Route path='/Login' element={<Login />} />
      {/* 카카오 주소 api 쓰는 것. 테스트 */}
      {/* <Route path='/test' element={<Test/>} /> */}
      {/* <Route path='/findid' element={<FindId />} />
      <Route path="/detail" element={<Detail />} />
      <Route path='/findpwd' element={<FindPwd />} />  */}
    </Routes>
      {/* <Route path='/' element={<MainPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/>

      {/* <Route path='/' element={<MainPage/>}/> */}
      {/* <Route path='/admin/*' element={<AdminPage/>}/>
      <Route path='/MyPage/*' element={<MyPage/>}/> */}
      
    {/* <AdminPage/> */}
    {/* <MyPage/> */}
    {/* <Detail/> */}
    {/* <Login /> */}
    {/* <Sign/> */}
    </>
  );
}
export default App;
