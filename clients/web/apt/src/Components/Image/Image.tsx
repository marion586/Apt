import React, { FC } from 'react';
import { Theme } from '@themes/apt.theme';

interface ImageProps {
  circle?: boolean;
  content?: JSX.Element;
  src: string;
  width: string | number | undefined;
  height: number;
  border?: string;
  radius?: boolean;
  alt?: string;
  style?: React.CSSProperties;
}

const Image: FC<ImageProps> = ({ circle = false, content, src, width, height, alt, border, radius, ...style }) => {
  let borderRadius = '0px';
  if (circle) {
    borderRadius = '50%';
  } else if (radius) {
    borderRadius = Theme.borderBase.borderRadius;
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url("${src}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: width,
          height: height,
          borderRadius: borderRadius,
          border: border,
        }}
      >
        {content}
      </div>
    </>
  );
};

export default Image;
