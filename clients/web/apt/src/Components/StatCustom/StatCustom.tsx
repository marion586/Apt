import React, { FC } from 'react';
import { Divider } from 'antd';
import './style.css';

export interface statsProps {
  label: string;
  count: number;
}

interface StatCustomProps {
  items: statsProps[];
  type: React.CSSProperties | undefined;
}

const StatCustom: FC<StatCustomProps> = ({ items, type }) => {
  const statsSeparator = <Divider type="vertical" />;

  return (
    <>
      <div className="custom-content-stat" style={{ ...type }}>
        {items.map((stats, index) => (
          <li key={index}>
            {index > 0 ? statsSeparator : ''}
            <span key={index}>
              <b>{stats.count}</b>
              <small>{stats.label}</small>
            </span>
          </li>
        ))}
      </div>
    </>
  );
};

export default StatCustom;
