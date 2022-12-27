import React, { FC } from 'react';
import { Typography } from 'antd';
import { Theme } from '@themes/apt.theme';
import './style.css';

interface HeadingProps {
  level: 5 | 1 | 2 | 3 | 4 | undefined;
  title: string;
  icon?: JSX.Element; // optionnel ?
  cardTitle?: boolean;
}

const { Title } = Typography;
const Heading: FC<HeadingProps> = ({ level, title, icon, cardTitle }) => {
  return (
    <>
      <Title level={level} style={cardTitle ? Theme.titleCard : Theme.title}>
        {icon} {title}
      </Title>
    </>
  );
};

export default Heading;
