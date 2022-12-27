import { Card, Col, Row } from 'antd';
import { FC } from 'react';
import { FaPlus, FaUserAlt } from 'react-icons/fa';
import ButtonCustom from '@components/ButtonCustom/ButtonCustom';
import StatCustom from '@components/StatCustom/StatCustom';
import { Theme } from '@themes/apt.theme';
import FooterText from '@components/FooterText/FooterText';
import Heading from '@components/Heading/Heading';
import Image from '@components/Image/Image';
import './style.css';

const statsItems = [
  { label: 'Mérites', count: 125 },
  { label: 'Publications', count: 125 },
  { label: 'Followers', count: 125 },
];

interface User {
  Titre: string;
  SubTitre: string;
  Image: string;
  ImageCouverture: string;
  link: string;
}

interface UserProps {
  dataUser: User;
}

const SemiProfil: FC<UserProps> = ({ dataUser }) => {
  return (
    <Card className="mini-profil-container">
      <Row className="mini-profil-couverture">
        <Col span={24}>
          <Image src={dataUser.ImageCouverture} width={'100%'} height={79} />
        </Col>
      </Row>
      <Row className="mini-profil-content">
        <Col span={24} className="mini-profil-content-user">
          <Image src={dataUser.Image} width={70} height={70} radius={true} />
          <div>
            <Heading title={dataUser.Titre} level={1} />
            <small>{dataUser.SubTitre}</small>
          </div>
        </Col>
        <Col span={24} className="mini-profil-content-stat">
          <Row justify="center">
            <Col className="mini-profil-content-stat-item">
              <StatCustom type={undefined} items={statsItems} />
            </Col>
          </Row>
        </Col>
        <Col span={24} className="mini-profil-control">
          <ButtonCustom size="small" type={Theme.button.warning} content="Voir profile" icon={<FaUserAlt />} />
          <ButtonCustom size="small" type={Theme.button.primary} content="Inviter" icon={<FaPlus />} />
        </Col>
      </Row>
      <Row>
        <FooterText titre="Voir plus" link={dataUser.link} />
      </Row>
    </Card>
  );
};

export default SemiProfil;
