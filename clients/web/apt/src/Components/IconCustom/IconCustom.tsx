import React, { FC } from 'react';
import { Badge } from 'antd';
import './style.css';

interface IconCustomProps {
  color?: string;
  iconDark?: boolean;
  count?: number;
  active: boolean;
  icon?: JSX.Element;
  type?: React.CSSProperties | undefined;
}

const IconCustom: FC<IconCustomProps> = ({ icon, color, iconDark, count, active }) => {
  return (
    <>
      <span style={{ cursor: "pointer" }} className="navigation-icon-custom">
        {count ? (
          <Badge style={{ backgroundColor: color }} className='badgeNotif' count={count} />
        ) : (<></>)}
        {icon}
      </span>
    </>
  );
};

export default IconCustom;
