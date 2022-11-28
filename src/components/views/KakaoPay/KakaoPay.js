import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PayCancel from './PayCancel';
import PayReady from './PayReady';
import PayResult from './PayResult';
import PaySelcet from './PaySelect';

function KakaoPay() {
    return (
        <div>
            결제 페이지
            <Routes>
                <Route path="/payready" element={<PayReady />} />
                <Route path="/payresult" element={<PayResult />} />
                <Route path="/paycancel" element={<PayCancel />} />
                <Route path="/payselect" element={<PaySelcet />} />
            </Routes>
        </div>
    )
}

export default KakaoPay;