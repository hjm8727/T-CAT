import {Routes, Route} from "react-router-dom";
import FindId from "./components/views/FindIdPage/FindId";
import FindPwd from "./components/views/FindPwdPage/FindPwd";
import MainPage from "./components/views/MainPage/MainPage";
// import AdminPage from "./components/views/AdminPage/AdminPage";
// import MyPage from "./components/views/MyPage/MyPage";
import Detail from "./components/views/DetailPage/Detail";
import KakaoPay from "./components/views/KakaoPay/KakaoPay";
// import PayReady from "./components/views/KakaoPay/PayReady";
// import PayResult from "./components/views/KakaoPay/PayResult";
// import PaySelect from "./components/views/KakaoPay/PaySelect";
// import PayCancel from "./components/views/KakaoPay/PayCancel";
import Login from "./components/views/LoginPage/";
import Sign from "./components/views/SignPage/Sign";
import Test from "./components/views/Test/Test";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      {/* <Route path='/admin/*' element={<AdminPage/>}/>
      <Route path='/MyPage/*' element={<MyPage/>}/>
      <Route path='/kakaopay/*' element={<KakaoPay/>}/>
      <Route path='/' element={<Login />} />
      <Route path='/sign' element={<Sign />} /> */}
      {/* 카카오 주소 api 쓰는 것. 테스트 */}
      <Route path='/test' element={<Test />} />
      <Route path='/findid' element={<FindId />} />
      {/* <Route path="/detail" element={<Detail />} /> */}
      <Route path='/findpwd' element={<FindPwd />} /> 
    </Routes>

    {/* <Routes>
      <Route path="/" element={<PayReady />} />
      <Route path="/payresult" element={<PayResult />} />
      <Route path="/paycancel" element={<PayCancel />} />
    </Routes> */}
    {/* <AdminPage/> */}
    {/* <MyPage/> */}
    {/* <Detail/> */}
    {/* <Login /> */}
    {/* <Sign/> */}
    </>
  );
}
export default App;
