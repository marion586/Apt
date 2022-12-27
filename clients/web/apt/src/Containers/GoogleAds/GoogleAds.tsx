import React, { FC } from 'react';
import { Card } from 'antd';
import image from '@images/ads.png';
import Image from '@components/Image/Image';
import './style.css';
import Heading from '@components/Heading';

const GoogleAds: FC = () => {
  return (
    <>
      <Card className="google-adds-container">
        <Image src={image} width={'50%'} height={70} />
        <Heading title="PUBLICATION GOOGLE ADDS" level={1} />
      </Card>
    </>
  );
};

export default GoogleAds;
