import { useState, useEffect } from "react";
import NavBar from "./Tool/TopBar";
import styled from "styled-components";
import {storage} from "./Tool/Firebase";
import {ref, uploadBytes, listAll, getDownloadURL,deleteObject, getStorage} from "firebase/storage";
import {v4} from "uuid";

const BannerBlock=styled.div`
    margin:0 auto;
    box-sizing: border-box;
    width: 100vw;
.tableContainer{
    border: 2px solid gray;
    margin: 30px 30px;
}
.tableWrap{
    margin: 15px 30px;
    th{
        width: 800px;
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
    /* width: 100vw; */
    /* height: auto; */
    /* display: flex; */
    align-items: center;
    flex-direction: column;
    ul{
        list-style: none;
    }
    li{
    float: left;
}
}
    img{
        width: 300px;
        height: 200px;
        margin: 10px;
    }
`;

const Banner=()=>{
    // 배너 제목, 링크 클릭시 이동 주소 담는 값
    const [title, setTitle] = useState("");
    const [adUrl, setAdUrl] = useState("");
    const[image, setImage] = useState("");
    // 사진 업로드 하고 담는 값
    const[imageList, setImageList] = useState([]);
    const imageListReg= ref(storage, "image/")
    const imageRef = ref(storage,`image/${image.name + v4()}`);

    // 파이어베이스에 등록
    const uploadImage=(e)=>{
        if(image == null) return;
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

    // 파이어베이스 삭제
    const onClickDelete=()=>{
        // 파일삭제용 변수, 저 jpg 주소를 어떻게 가져오지 삭제 404에러 
        const desertRef = ref(storage, `image/${image.name + v4()}`);
        deleteObject(desertRef).then(() => {
            console.log("파이어베이스 삭제");
          }).catch((error) => {
          });
          alert("삭제되었습니다")
    }
    
    return(
        <BannerBlock>
        <NavBar name="광고/배너 관리"/>
        <div className="tableContainer">
            <table className="tableWrap">
            <tbody>
                <tr>
                    <th>배너 제목</th>
                    <td><input type="text" value={title}/></td>
                </tr>
                <tr>
                    <th>링크 주소</th>
                    <td><input type="text" value={adUrl}/></td>
                </tr>
                <tr>
                    <th>배너 이미지</th>
                    <td><input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
                    <button onClick={uploadImage}>이미지 올리기</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <button className="uploadAd">배너 등록하기</button>
        <h3>이미지 미리보기</h3>
        <div className="preview">
        {imageList.map((url) => ( <ul>
            <li><img src={url} alt="사용자 첨부 이미지"/>
            <button className="deleteImage" onClick={onClickDelete}>삭제하기</button>
            </li></ul>
          ))}
        </div>
        </BannerBlock>
    );
}
export default Banner;