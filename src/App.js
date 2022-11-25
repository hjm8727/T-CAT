import AdminPage from "./components/views/AdminPage/AdminPage";
import MainPage from "./components/views/MainPage/MainPage";
<<<<<<< HEAD
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
=======
import {Routes, Route, BrowserRouter} from "react-router-dom";
>>>>>>> 750ce5868d66298360999c944e86af4ea68eb235
import Detail from "./components/views/DetailPage/Detail";
import Login from "./components/views/LoginPage/";
import MyPage from "./components/views/MyPage/MyPage";
import PayReady from "./components/views/KakaoPay/PayReady";
import MainHeader from "./components/views/MainHeader/MainHeader";
// import PayResult from "./components/views/KakaoPay/PayResult";
// import PaySelect from "./components/views/KakaoPay/PaySelect";
// import PayCancel from "./components/views/KakaoPay/PayCancel";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
<<<<<<< HEAD
    </Routes>
    <AdminPage/>
    {/* <Detail/> */}
=======
    </Routes> */}
    <MainPage />
    {/* <Routes>
      <Route path="/" element={<Detail />} />
      <Route path="/payready" element={<PayReady />} />
    </Routes> */}
    {/* <AdminPage/> */}
    {/* <MyPage/> */}
    {/* <Detail/> */}
    {/* <Login /> */}
>>>>>>> 750ce5868d66298360999c944e86af4ea68eb235
    </>
  );
}
export default App;
