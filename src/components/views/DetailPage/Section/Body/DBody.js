import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Contents from './Contents';
import Qna from './Qna';
import Reviews from './Reviews';


function DBody() {
  const [key, setKey] = useState('home');

  return (
    <div style={{width: '70%', height: '100rem'}}>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      style={{width: '35%', position: 'sticky', top: '0'}}
    >
      <Tab eventKey="home" title="공연정보">
      <Contents/>
      </Tab>
      <Tab eventKey="profile" title="관람후기">
      <Reviews/>
      </Tab>
      <Tab eventKey="contact" title="Q&A">
      <Qna/>
      </Tab>
    </Tabs>
    </div>
  );
}

export default DBody;