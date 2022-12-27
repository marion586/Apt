import React, { FC } from 'react';
import { Card, Col, Row } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { Theme } from '@themes/apt.theme';
import ButtonCustom from '@components/ButtonCustom';
import Image from '@components/Image/Image';
import image1 from '@images/1.jpg';
import image2 from '@images/2.jpg';
import Heading from '@components/Heading';
import StatCustom from '@components/StatCustom/StatCustom';
import './style.css';

const ProfilHeader: FC = () => {
  const CoverEditButton = (
    <div className="profil-couverture-btn">
      <ButtonCustom icon={<FaEdit />} type={Theme.button.default} content="Changer la photo" />
    </div>
  );

  const PhotoEditButton = (
    <div className="profil-photo-btn">
      <ButtonCustom icon={<FaEdit />} type={Theme.button.default} content="" />
    </div>
  );

  const statsItems = [
    { label: 'Mérites', count: 125 },
    { label: 'Publications', count: 125 },
    { label: 'Followers', count: 125 },
  ];
  return (
    <>
      <Card style={{ width: '100%' }} bordered={false}>
        <div className="profil-couverture">
          <Image src={image1} alt="Couverture" width="100%" height={174} radius content={CoverEditButton} />
        </div>

        <div className="profil-content">
          <Row className="profil-content-user">
            <Col span={8} className="profil-photo">
              <Image
                src={image2}
                alt="Profil"
                width={118}
                height={118}
                border="1px solid white"
                radius
                content={PhotoEditButton}
              />
            </Col>

            <Col span={8} className="profil-content-name">
              <span>
                <Heading level={4} title="Mathieu Nebra" />
                <small>Musicien et Auteur Compositeur</small>
              </span>
            </Col>

            <Col span={8} className="profil-content-stat">
              <StatCustom type={undefined} items={statsItems} />
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};

export default ProfilHeader;
