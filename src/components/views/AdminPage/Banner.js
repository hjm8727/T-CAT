import { useState, useEffect } from "react";
import NavBar from "./Tool/TopBar";
import styled from "styled-components";
import {storage} from "./Tool/Firebase";
import {ref, uploadBytes, listAll, getDownloadURL,deleteObject, getStorage} from "firebase/storage";
import {v4} from "uuid";

const BannerBlock=styled.div`
    margin:0 auto;
    box-sizing: border-box;
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
        width: 200px;
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
    // image폴더 안에 사진명+고유식별자로 저장
    const imageRef = ref(storage,`image/${image.name + v4()}`);

    // 파이어베이스에 등록
    const uploadImage=(e)=>{
        if(image){
        uploadBytes(imageRef, image).then((snap)=>{
            getDownloadURL(snap.ref).then((url)=>{
                // alert("이미지 업로드")
                setImageList((prev)=>[...prev, url])
                console.log("사진 주소값 : " + imageRef);
            })
        })
    } else {
        alert("사진을 등록하세요")
    }
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

    const onClickDelete=()=>{
        // setImageList([]);
        const storage = getStorage();
        const desertRef = ref(storage,`image/study.png`)
        deleteObject(desertRef).then(()=>{
            console.log("삭제 성공");
        }).catch((error)=>{
            console.log("삭제 에러");
            console.log(storage);
        })
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
        {imageList.map((url) => ( <ul key={url}>
            <li><img src={url} alt="사용자 첨부 이미지"/>
            <button className="deleteImage" onClick={onClickDelete}>삭제하기</button>
            </li></ul>
          ))}
        </div>
        </BannerBlock>
    );
}
export default Banner;