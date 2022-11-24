import AdminPage from "./components/views/AdminPage/AdminPage";
import MainPage from "./components/views/MainPage/MainPage";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
// import Detail from "./components/views/DetailPage/Detail";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
    </Routes>
    <AdminPage/>
    {/* <Detail/> */}
    </>
  );
}
export default App;
