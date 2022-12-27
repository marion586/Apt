import React, { FC } from 'react';
import { Tabs } from 'antd';
import './style.css';

const { TabPane } = Tabs;
interface ProfilItem {
  content: JSX.Element;
  label: string;
  key: string;
}
interface PropsProfilTabs {
  items: ProfilItem[];
  activeKey?: string;
}

const ProfilTabs: FC<PropsProfilTabs> = ({ items, activeKey }) => {
  const pushUrl = (endpoint: any) => {
    let pathname = window.location.pathname;
    let pathSplit = pathname.split('/');
    let basepathname = pathSplit[1];

    window.history.pushState('', 'Profil', pathSplit.length > 2 ? endpoint : `${basepathname}/${endpoint}`);
  };
  return (
    <>
      <div className="profil-tabs">
        <Tabs defaultActiveKey={activeKey ? activeKey : undefined} onChange={pushUrl}>
          {items.map((tabs, index) => (
            <TabPane tab={tabs.label} key={tabs.key}>
              {tabs.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default ProfilTabs;
