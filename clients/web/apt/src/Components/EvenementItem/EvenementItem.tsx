import React, { FC } from 'react';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { Col, Row } from 'antd';
import './style.css';
import Image from '@components/Image/Image';
import Heading from '@components/Heading/Heading';

interface Props {
  titre: string;
  subTitre: string;
  image: any;
}

const EvenementItem: FC<Props> = ({ titre, image, subTitre }) => {
  return (
    <>
      <Row justify="center">
        <Col span={22} className="evenement-item-image-container">
          {/* width 100% */}
          <Image src={image} width="190px" height={130} radius={true} />
          <div className="evenement-item-image-container-content">
            <Heading title={titre} level={5} />
            <small>{subTitre}</small>
          </div>
          <div className="evenement-item-image-container-right">
            <FaExpandArrowsAlt size={15} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default EvenementItem;
