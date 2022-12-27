import { Row, Col } from 'antd';
import React, { FC, useState } from 'react';
import Navigation from '@containers/Navigation/Navigation';
import SideBar from '@containers/SideBar/SideBar';
import './style.css';

interface PropsDashboard {
  content: JSX.Element;
}

const Dashboard: FC<PropsDashboard> = ({ content }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = (etat?: boolean) => {
    etat ? setCollapsed(true) : setCollapsed(false);
  };

  return (
    <>
      <Row justify="center">
        <Col span={18}>
          <Navigation collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={18} className="side-bar-container">
          <SideBar collapsed={collapsed} toggleCollapsed={toggleCollapsed} content={content} />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
