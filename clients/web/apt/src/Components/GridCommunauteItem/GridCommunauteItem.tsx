import React, { FC } from 'react';
import './style.css';
import { Col, Row } from 'antd';
import Image from '@components/Image/Image';
import Heading from '@components/Heading/Heading';

interface Props {
  titre: string;
  description: string;
  image: string;
  hover?: boolean;
}

const GridCommunauteItem: FC<Props> = ({ titre, image, description, hover }) => {
  return (
    <>
      <Row>
        <Col span={24} className={hover ? 'com-container com-container-hover' : 'com-container'}>
          <Image src={image} width={36} height={36} circle={true} />
          <div className="com-container-header">
            <Heading title={titre} level={5} />
            <small>{description}</small>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default GridCommunauteItem;
