import React from 'react';

import Message from './Messages';
import Chat from './Chat';
import List from './List';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 20,
      color: '#0000ff',
    }}
  />
);

const onSearch = value => console.log(value);


const Main = () => {
  return (
    <>
    
      <div className="srch">
        
          <Search 
          className="search-input"
          placeholder=" SEARCH"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </div>
      
      <div className="lm"> 
        <Row>
        
          <Col span={18} push={6}>
          <Message/>
          </Col>
          
          <Col span={6} pull={18}>
          <List/>
          </Col>
        </Row>
       
      </div>    
      <Chat/>
      
    </>

  )
};
export default Main;
