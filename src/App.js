import {Routes, Route} from "react-router-dom";
import FindId from "./components/views/FindIdPage/FindId";
import FindPwd from "./components/views/FindPwdPage/FindPwd";
<<<<<<< HEAD
import MainPage from "./components/views/MainPage/MainPage";
import AdminPage from "./components/views/AdminPage/AdminPage";
// import MyPage from "./components/views/MyPage/MyPage";
import Detail from "./components/views/DetailPage/Detail";
import KakaoPay from "./components/views/KakaoPay/KakaoPay";
// import PayReady from "./components/views/KakaoPay/PayReady";
// import PayResult from "./components/views/KakaoPay/PayResult";
// import PaySelect from "./components/views/KakaoPay/PaySelect";
// import PayCancel from "./components/views/KakaoPay/PayCancel";

=======
>>>>>>> cb364e2a1e4fe5afb1db88e6fd5236aa1fce5b7b
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
      <Route path='/kakaopay/*' element={<KakaoPay/>}/>
      <Route path='/' element={<Login />} />
      <Route path='/sign' element={<Sign />} />
      <Route path='/findid' element={<FindId />} />
      <Route path="/detail" element={<Detail />} />
      <Route path='/findpwd' element={<FindPwd />} /> 
      <Route path='/MyPage/*' element={<MyPage/>}/>
    </Routes>
      {/* <Route path='/' element={<MainPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/> */}
      {/* <Route path='/' element={<MainPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/>

<<<<<<< HEAD
    {/* <Routes>
      <Route path="/" element={<PayReady />} />
      <Route path="/payresult" element={<PayResult />} />
      <Route path="/paycancel" element={<PayCancel />} />
    </Routes> */}
    <AdminPage/>
=======
      {/* <Route path='/' element={<MainPage/>}/> */}
      {/* <Route path='/admin/*' element={<AdminPage/>}/>
      <Route path='/MyPage/*' element={<MyPage/>}/> */}
      
    {/* <AdminPage/> */}
>>>>>>> cb364e2a1e4fe5afb1db88e6fd5236aa1fce5b7b
    {/* <MyPage/> */}
    {/* <Detail/> */}
    {/* <Login /> */}
    {/* <Sign/> */}
    </>
  );
}
export default App;
