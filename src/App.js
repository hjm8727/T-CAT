import Login from "./components/views/LoginPage/Login";
import {Routes, Route} from "react-router-dom";
import Sign from "./components/views/SignPage/Sign";
import KakaoPay from "./components/views/KakaoPay/KakaoPay";
import MainPage from "./components/views/MainPage/MainPage";
import AdminPage from "./components/views/AdminPage/AdminPage";
import Detail from "./components/views/DetailPage/Detail";
import MyPage from "./components/views/MyPage/MyPage";

import Seat from "./components/views/DetailPage/Section/Seat/Seat";
import Screen from "./components/views/DetailPage/Section/Seat/Screen";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/>
      <Route path='/MyPage/*' element={<MyPage/>}/>
      <Route path='/kakaopay/*' element={<KakaoPay/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/sign' element={<Sign />} />
      <Route path="/detail" element={<Detail />} />
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
