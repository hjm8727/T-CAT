import { useState } from "react";

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
        <input type="file" name="file" onChange={handleImage}/>
        <button onClick={submitApi}>등록</button>
        </div>
        </>
    );

}
export default Banner;
