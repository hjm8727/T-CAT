import React from "react";
import { useParams } from "react-router-dom";


function Screen() {
    const { selected, totalprice } = useParams();

    return (
        <div className="ScreenWrap">
        <div className="show">
            <img src="images/TCat.jpg" className="img" alt=""/>
            <h3>선택된 좌석</h3>
            {selected}
            <h3>총 금액 : {totalprice}</h3>
        </div>
        </div>
    );
}

export default Screen;