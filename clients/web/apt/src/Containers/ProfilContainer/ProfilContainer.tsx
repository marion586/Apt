import React, { FC } from 'react';
import { Col, Divider, Row } from 'antd';
import { Font } from '@themes/apt.theme';
import ProfilHeader from '@containers/ProfilHeader';
import ProfilTabs from '@containers/ProfilTabs/ProfilTabs';
import './style.css';

interface ProfilItem {
  content: JSX.Element;
  label: string;
  key: string;
}
interface PropsProfil {
  items: ProfilItem[];
  activeKey: string;
}

const ProfilContainer: FC<PropsProfil> = ({ items, activeKey }) => {
  return (
    <>
      <div
        style={{
          fontFamily: Font.family,
        }}
      >
        <Row justify="center">
          <Col span={16}>
            <ProfilHeader />
            <Divider style={{ margin: '0px' }} />
            <ProfilTabs items={items} activeKey={activeKey} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProfilContainer;
