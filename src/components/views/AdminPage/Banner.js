import { useState } from "react";
import NavBar
 from "./Tool/NavBar";
const Banner=()=>{
    const[image, setImage] = useState("");

    const handleImage=(e)=>{
        console.log(e.target.value);
        setImage(e.target.value[0])
    }
    const submitApi=()=>{

    }
    return(
        <>
        <div>
        <NavBar name="광고/배너 관리"/>
        <input type="file" name="file" onChange={handleImage}/>
        <button onClick={submitApi}>등록</button>
        </div>
        </>
    );

}
export default Banner;
