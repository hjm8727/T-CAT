import './featuredInfo.css'
import { HiOutlineCurrencyDollar, HiOutlineUserAdd ,HiOutlineTicket } from "react-icons/hi";

const FeaturedInfo=()=>{
    return(
        <div className="featured">
            <div className="featuredItem">
                <HiOutlineCurrencyDollar size="80px"/>
                <div className='featured-content'>
                <div className="featureTitle">누적 수익</div>
                <div className="featuredRate">2000</div>
                </div>
            </div>

            <div className="featuredItem">
                <HiOutlineUserAdd size="80px"/>
                <div className='featured-content'>
                <div className="featureTitle">누적 회원 수</div>
                <div className="featuredRate">2000</div>
                </div>
            </div>
            <div className="featuredItem">
                <HiOutlineTicket size="80px"/>
                <div className='featured-content'>
                <div className="featureTitle">누적 예매 수</div>
                <div className="featuredRate">2000</div>
                </div>
            </div>
        </div>
    );

}
export default FeaturedInfo;