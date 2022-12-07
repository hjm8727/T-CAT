import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Contents from './Contents';
import Qna from './Qna';
import Reviews from './Reviews';


function DBody2() {
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
      <Tab eventKey="home" title="Home">
      <Contents/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <Reviews/>
      </Tab>
      <Tab eventKey="contact" title="Contact">
      <Qna/>
      </Tab>
    </Tabs>
    </div>
  );
}

export default DBody2;