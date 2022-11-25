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

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/>
      <Route path='/MyPage/*' element={<MyPage/>}/>
    </Routes>

    {/* <Routes>
      <Route path="/" element={<Detail />} />
      <Route path="/payready" element={<PayReady />} />
    </Routes> */}

    {/* <Detail/> */}
    {/* <Login /> */}
    </>
  );
}
export default App;
