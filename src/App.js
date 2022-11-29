import Login from "./components/views/LoginPage/Login";
import {Routes, Route} from "react-router-dom";
import Sign from "./components/views/SignPage/Sign";
import FindId from "./components/views/FindIdPage/FindId";
import FindPwd from "./components/views/FindPwdPage/FindPwd";
import KakaoPay from "./components/views/KakaoPay/KakaoPay";
import MainPage from "./components/views/MainPage/MainPage";
import AdminPage from "./components/views/AdminPage/AdminPage";
import Detail from "./components/views/DetailPage/Detail";
// import MyPage from "./components/views/MyPage/MyPage";
// import PayReady from "./components/views/KakaoPay/PayReady";
// import PayResult from "./components/views/KakaoPay/PayResult";
// import PaySelect from "./components/views/KakaoPay/PaySelect";
// import PayCancel from "./components/views/KakaoPay/PayCancel";

import MyPage from "./components/views/MyPage/MyPage";
import AdminHome from "./components/views/AdminPage/AdminHome";
// import MainPage from "./components/views/MainPage/MainPage";
// import KLT from "./components/views/KakaoLogin/KLT";


function App() {
  return (
    <>
      {/* JM 지민 */}
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/>
      <Route path='/MyPage/*' element={<MyPage/>}/>
      <Route path='/kakaopay/*' element={<KakaoPay/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/sign' element={<Sign />} />
      <Route path='/findid' element={<FindId />} />
      <Route path="/detail" element={<Detail />} />
      <Route path='/findpwd' element={<FindPwd />} /> 
    </Routes>
      {/* <Route path='/' element={<MainPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/> */}
      {/* <Route path='/' element={<MainPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/>

    {/* <Routes>
      <Route path="/" element={<PayReady />} />
      <Route path="/payresult" element={<PayResult />} />
      <Route path="/paycancel" element={<PayCancel />} />
    </Routes> */}
    <AdminPage/>
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
