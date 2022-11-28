import AdminPage from "./components/views/AdminPage/AdminPage";
import MainPage from "./components/views/MainPage/MainPage";
import {Routes, Route} from "react-router-dom";
import Detail from "./components/views/DetailPage/Detail";
import Login from "./components/views/LoginPage/";
import MyPage from "./components/views/MyPage/MyPage";



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
    </Routes>
    {/* <AdminPage/> */}
    {/* <MyPage/> */}
    {/* <Detail/> */}
    <br/>
    {/* <Login /> */}
    </>
  );
}
export default App;
