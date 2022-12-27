import { Col, Divider, Dropdown, Input, Menu, Row, Typography } from 'antd';
import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import { MdAccountCircle, MdArrowBack, MdLogout, MdMenu, MdMessage, MdNotifications, MdSettings } from 'react-icons/md';
import apt from '@images/logo.png';
import logo from '@images/user.jpg';
import { Colors } from '@themes/apt.theme';
import IconCustom from '@components/IconCustom/IconCustom';
import './style.css';

const { Link } = Typography;

interface NavBarProps {
  collapsed: boolean;
  toggleCollapsed?(etat: boolean): void;
}

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <Link href="#links" className="menu-items-custom">
            <MdAccountCircle size={14} className="menu-icon" /> <span>Profil</span>
          </Link>
        ),
        className: 'drop-item-custom',
      },
      {
        key: '2',
        label: (
          <Link href="#links" className="menu-items-custom">
            <MdSettings size={14} className="menu-icon" /> <span>Paramètre</span>
          </Link>
        ),
        className: 'drop-item-custom',
      },
      {
        key: '3',
        label: (
          <Link href="#links" className="menu-items-custom">
            <MdLogout size={14} className="menu-icon" /> <span>Se déconnecter</span>
          </Link>
        ),
        className: 'drop-item-custom',
      },
    ]}
  />
);

const Navigation: FC<NavBarProps> = ({ collapsed, toggleCollapsed }) => {
  return (
    <>
      <Row className="navigation-container">
        <Col span={1}></Col>
        <Col span={2}>
          <div className="navigation-container-left">
            {collapsed ? (
              <MdMenu onClick={() => toggleCollapsed?.(false)} className="navigation-container-left-menu" />
            ) : (
              <MdArrowBack
                onClick={() => toggleCollapsed?.(true)}
                size={24}
                className="navigation-container-left-menu"
              />
            )}
            <img src={apt} alt="Logo" width={40} height={40} />
          </div>
        </Col>
        <Col span={2}></Col>
        <Col span={9}>
          <Input
            type="text"
            placeholder="Rechercher ..."
            suffix={<AiOutlineSearch />}
            className="navigation-container-center-search-custom"
          />
        </Col>
        <Col span={3}></Col>
        <Col span={6}>
          <div className="navigation-container-right">
            <div className="navigation-container-right-icon">
              <span className="navigation-icon-content">
                <IconCustom active={true} icon={<FaHome />} />
              </span>
              <span className="navigation-icon-content">
                <IconCustom active={false} count={3} color={Colors.warning} icon={<ImUsers />} />
              </span>
              <span className="navigation-icon-content">
                <IconCustom active={false} count={3} color={Colors.danger} icon={<MdMessage />} />
              </span>
              <span className="navigation-icon-content">
                <IconCustom active={false} count={3} color={Colors.success} icon={<MdNotifications />} />
              </span>
            </div>
            <Divider type="vertical" className="navigation-container-right-divider" />
            <Dropdown overlay={menu}>
              <div className="navigation-container-right-profil-user-header">
                <img
                  src={logo}
                  alt="User Name"
                  width={30}
                  height={30}
                  className="navigation-container-right-profil-user"
                />
                <span>UserName</span>
              </div>
            </Dropdown>
          </div>
        </Col>
        <Col span={1}></Col>
      </Row>
    </>
  );
};

export default Navigation;
