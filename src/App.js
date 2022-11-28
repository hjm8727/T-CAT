import {Routes, Route} from "react-router-dom";
import MainPage from "./components/views/MainPage/MainPage";
import AdminPage from "./components/views/AdminPage/AdminPage";
import MyPage from "./components/views/MyPage/MyPage";
import Detail from "./components/views/DetailPage/Detail";
import Login from "./components/views/LoginPage/";
import PayReady from "./components/views/KakaoPay/PayReady";
import PayResult from "./components/views/KakaoPay/PayResult";
import PaySelect from "./components/views/KakaoPay/PaySelect";
import PayCancel from "./components/views/KakaoPay/PayCancel";
import Sign from "./components/views/SignPage/Sign";
import KakaoPay from "./components/views/KakaoPay/KakaoPay";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/>
      <Route path='/MyPage/*' element={<MyPage/>}/>
      {/* <Route path='/*' element={<PayReady/>}/> */}
    </Routes>

    {/* <Routes>
      <Route path="/" element={<Detail />} />
      <Route path="/" element={<PayReady />} />
      <Route path="/payresult" element={<PayResult />} />
      <Route path="/paycancel" element={<PayCancel />} />
    </Routes> */}

    {/* <Detail/> */}
    {/* <Login /> */}
    <br/>
    {/* <Sign/> */}
    </>
  );
}
export default App;
