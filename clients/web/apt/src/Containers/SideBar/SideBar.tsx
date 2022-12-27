import { Menu, MenuProps } from 'antd';
import { default as React, FC } from 'react';
import { BiCalendarEvent } from 'react-icons/bi';
import { FaAward, FaListOl, FaShoppingCart, FaUserCheck, FaUserPlus, FaVideo } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import Image from '@components/Image/Image';
import avatarTemp from '@images/user.jpg';
import './style.css';

interface SideBarProps {
  collapsed: boolean;
  content: JSX.Element;
  toggleCollapsed?(etat: boolean): void;
}

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const avatarMenu = (
  <>
    Mathieu Nebra<span>Auteur compositeur Corporation OpenClassroom.</span>
  </>
);

const items: MenuItem[] = [
  getItem(
    avatarMenu,
    '9',
    <span className="ant-menu-item-icon">
      <Image src={avatarTemp} width={17} height={17} circle />
    </span>,
  ),
  getItem('Top 10', '1', <FaListOl size={17} />),
  getItem('ACT (Challenge)', '2', <FaAward size={17} />),
  getItem('Videos', '3', <FaVideo size={17} />),
  getItem('Evenements', '4', <BiCalendarEvent size={17} />),
  getItem('Les ajouts', '5', <FaUserPlus size={17} />),
  getItem('Ajoutés', '6', <FaUserCheck size={17} />),
  getItem('Communauté', '7', <HiUsers size={17} />),
  getItem('Marketplace', '8', <FaShoppingCart size={17} />),
];

const SideBar: FC<SideBarProps> = ({ collapsed, toggleCollapsed, content }) => {
  return (
    <>
      <Menu
        className="sideMenu"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
      <div className="sidebar-content">{content}</div>
      {!collapsed && <div className="backdrop" onClick={() => toggleCollapsed?.(true)}></div>}
    </>
  );
};

export default SideBar;
