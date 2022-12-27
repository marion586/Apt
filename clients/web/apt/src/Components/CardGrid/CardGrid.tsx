import { Card, Col, Row } from 'antd';
import { FC } from 'react';
import EvenementItemCarousel from '@components/EvenementItemCarousel/EvenementItemCarousel';
import Heading from '@components/Heading/Heading';
import ImageList from '@containers/ImageList/ImageList';
import ListeContent from '@containers/ListContent/ListContent';
import FooterText from '@components/FooterText/FooterText';
import './style.css';

interface dataElement {
  Titre: string;
  SubTitre: string;
  Image: string;
}

interface Props {
  titre?: string;
  link: string;
  cardContent: string;
  icon?: JSX.Element;
  iconOption?: JSX.Element;
  top?: string;
  dataElement: dataElement[];
}

const CardGrid: FC<Props> = ({ titre, icon, link, iconOption, top, cardContent, dataElement }) => {
  return (
    <>
      <Card className={top ? 'grid-container ' + top : 'grid-container'}>
        <Row justify="center">
          <Col span={23} className="grid-header">
            <div className="icon-header">{icon}</div>
            {titre ? <Heading title={titre} level={5} cardTitle /> : ''}
          </Col>
          <Col span={23} className="grid-body">
            {cardContent === 'carousel' ? <EvenementItemCarousel dataEvents={dataElement} /> : ''}
            {cardContent === 'grid' ? <ListeContent dataList={dataElement} /> : ''}
            {cardContent === 'image' ? <ImageList dataList={dataElement} /> : ''}
          </Col>
          <FooterText titre="Voir plus" link={link} />
          {iconOption ? <div className="icon-option">{iconOption}</div> : ''}
        </Row>
      </Card>
    </>
  );
};

export default CardGrid;
