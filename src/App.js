import {Routes, Route} from "react-router-dom";
import FindId from "./components/views/FindIdPage/FindId";
import FindPwd from "./components/views/FindPwdPage/FindPwd";
import Login from "./components/views/LoginPage/Login";
import Sign from "./components/views/SignPage/Sign";
import KakaoPay from "./components/views/KakaoPay/KakaoPay";
import Detail from "./components/views/DetailPage/Detail";
import MyPage from "./components/views/MyPage/MyPage";
// import MainPage from "./components/views/MainPage/MainPage";
// import AdminPage from "./components/views/AdminPage/AdminPage";
// import KLT from "./components/views/KakaoLogin/KLT";


function App() {
  return (
    <>
      {/* JM 지민 */}
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/sign' element={<Sign />} />
      <Route path='/findid' element={<FindId />} />
      <Route path='/findpwd' element={<FindPwd />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/kakaopay/*' element={<KakaoPay />} />
      <Route path='/MyPage/*' element={<MyPage/>}/>
    </Routes>
      {/* <Route path='/' element={<MainPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/>

      {/* <Route path='/' element={<MainPage/>}/> */}
      {/* <Route path='/admin/*' element={<AdminPage/>}/>
      <Route path='/MyPage/*' element={<MyPage/>}/> */}
      

      
      {/* 카카오 로그인 */}
    {/* <Route path='/' element={<KLT />} /> */}

    {/* <AdminPage/> */}
    {/* <MyPage/> */}
    {/* <Detail/> */}
    {/* <Login /> */}
    {/* <Sign/> */}
    </>
  );
}
export default App;
