import Login from "./components/views/LoginPage/Login";
import {Routes, Route} from "react-router-dom";
import Sign from "./components/views/SignPage/Sign";
import MainPage from "./components/views/MainPage/MainPage";
import AdminPage from "./components/views/AdminPage/AdminPage";
import Detail from "./components/views/DetailPage/Detail";
import MyPage from "./components/views/MyPage/MyPage";

import PayReady from "./components/views/KakaoPay/PayReady";
import PayResult from "./components/views/KakaoPay/PayResult";
import PayCancel from "./components/views/KakaoPay/PayCancel";
import PaySelect from "./components/views/KakaoPay/PaySelect";
import ResultFalse from "./components/views/KakaoPay/ResultFalse";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/>
      <Route path='/MyPage/*' element={<MyPage/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/sign' element={<Sign />} />
      <Route path="/detail" element={<Detail />} />
      {/* 지민 추가했습니다.. */}
      <Route path="/payready" element={<PayReady />} />
      <Route path="/payresult" element={<PayResult />} />
      <Route path="/paycancel" element={<PayCancel />} />
      <Route path="/payselect" element={<PaySelect />} />
      <Route path="/resultfalse" element={<ResultFalse />} />
    </Routes>

    {/* 정리 해놨는데 죄송... 좌석 테스트 좀 할게요 */}
    {/* <Routes>
          <Route path="/" element={<Seat />} />
          <Route path="/Screen/:selected/:totalprice" element={<Screen />} />
    </Routes> */}
    </>
  );
}
export default App;
