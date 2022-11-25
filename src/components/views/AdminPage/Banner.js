import { useState, useEffect } from "react";
import NavBar from "./Tool/NavBar";
import styled from "styled-components";
import {storage} from "./Tool/Firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";

const BannerBlock=styled.div`
.tableWrap{
    margin: 15px 30px;
    th{
        width: 200px;
        text-align: center;
        background-color: #CEAB93;
        height: 20px;
    }
    td{
        input{
            width: 500px;
        }
    }
}
.preview{
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}
    img{
        width: 300px;
        margin: 10px;
    }

`;

const Banner=()=>{
    const[image, setImage] = useState("");
    const[imageList, setImageList] = useState([]);

    const imageListReg= ref(storage, "image/")
    const uploadImage=()=>{
        if(image == null) return;
        const imageRef = ref(storage,`image/${image.name + v4()}`);
        uploadBytes(imageRef, image).then((snap)=>{
            getDownloadURL(snap.ref).then((url)=>{
                // alert("이미지 업로드")
                setImageList((prev)=>[...prev, url])
            })
        })
    }
    useEffect(()=>{
        listAll(imageListReg).then((response)=>{
            console.log(response);
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev,url])
                })
            })
        })

    },[])
    
    return(
        <BannerBlock>
        <NavBar name="광고/배너 관리"/>
        <table className="tableWrap">
            <tbody>
                <tr>
                    <th>배너 제목</th>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <th>링크 주소</th>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <th>배너 이미지</th>
                    <td><input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
                    <button onClick={uploadImage}>이미지 올리기</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h3>이미지 미리보기</h3>
        <div className="preview">
        {imageList.map((url)=>{return <img src={url} alt=''/>;})}
        </div>
        </BannerBlock>
    );

}
export default Banner;
