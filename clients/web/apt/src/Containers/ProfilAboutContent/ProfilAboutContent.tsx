import React, { FC } from 'react';
import { Divider, Col, Row, Menu, MenuProps } from 'antd';

import ProfilAboutForm from '@containers/ProfilAboutForm/ProfilAboutForm';

const ProfilAboutContent: FC = () => {
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('Général', '1'),
    getItem('Autre...', '2'),
    getItem('Autre...', '3'),
    getItem('Autre...', '4'),
  ];

  return (
    <>
      <Row className="profil-tabs-about" justify="center">
        <Col span={2} className="x-center">
          <div>
            <Menu inlineCollapsed={false} defaultSelectedKeys={['1']} mode="inline" theme="light" items={items} />
          </div>
        </Col>
        <Col span={2} className="xy-center">
          <Divider type="vertical" style={{ height: '100%' }} />
        </Col>
        <Col span={19}>
          <ProfilAboutForm title="Profile publique" />
        </Col>
      </Row>
    </>
  );
};

export default ProfilAboutContent;
