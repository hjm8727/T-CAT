import Login from "./components/views/LoginPage/Login";
import {Routes, Route} from "react-router-dom";
import Sign from "./components/views/SignPage/Sign";
import KakaoPay from "./components/views/KakaoPay/KakaoPay";
import MainPage from "./components/views/MainPage/MainPage";
import AdminPage from "./components/views/AdminPage/AdminPage";
import Detail from "./components/views/DetailPage/Detail";
import MyPage from "./components/views/MyPage/MyPage";


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
    </>
  );
}
export default App;
