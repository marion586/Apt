import React, { FC } from 'react';
import { Button } from 'antd';
import './style.css';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

interface ButtonProps {
  content: string;
  type: React.CSSProperties | undefined;
  size?: SizeType;
  href?: string;
  icon?: JSX.Element; // optionnel ?
}

const ButtonCustom: FC<ButtonProps> = ({ content, type, icon, href, size }) => {
  let fontSize = 10;
  switch (size) {
    case 'small':
      fontSize = 10;
      break;
    case 'middle':
      fontSize = 14;
      break;
    case 'large':
      fontSize = 16;
      break;
    default:
      fontSize = 14;
      break;
  }
  return (
    <>
      <Button href={href} icon={icon} style={{ ...type, fontSize: fontSize }} size={size}>
        {content}
      </Button>
    </>
  );
};

export default ButtonCustom;
