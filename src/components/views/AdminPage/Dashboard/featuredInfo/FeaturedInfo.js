import './featuredInfo.css'
import { HiOutlineCurrencyDollar, HiOutlineUserAdd ,HiOutlineTicket } from "react-icons/hi";
import { useEffect, useState } from 'react';
import AdminApi from '../../../../../api/AdminApi';

const FeaturedInfo=()=>{
    const [chartData, setChartData] = useState('');
    const [chartAmount, setChartAmount] = useState('');
    const [chartMember, setChartMember] = useState('');
    const [chartReserve, setChartReserve] = useState('');

    useEffect(() => {
        const getChart = async()=> {
        try {
            const response = await AdminApi.getChart();
            setChartAmount(response.data[0].cumuAmount);
            setChartMember(response.data[0].totalMember);
            setChartReserve(response.data[0].totalReserve);
        } catch (e) {
            console.log(e);
        }
    };
    getChart();
}, []);

    
    return(
        <div className="featured">
            <div className="featuredItem">
                <HiOutlineCurrencyDollar size="80px"/>
                <div className='featured-content'>
                <div className="featureTitle">누적 수익</div>
                <div className="featuredRate">{chartAmount}</div>
                </div>
            </div>

            <div className="featuredItem">
                <HiOutlineUserAdd size="80px"/>
                <div className='featured-content'>
                <div className="featureTitle">누적 회원 수</div>
                <div className="featuredRate">{chartMember}</div>
                </div>
            </div>
            <div className="featuredItem">
                <HiOutlineTicket size="80px"/>
                <div className='featured-content'>
                <div className="featureTitle">누적 예매 수</div>
                <div className="featuredRate">{chartReserve}</div>
                </div>
            </div>
        </div>
    );

}
export default FeaturedInfo;