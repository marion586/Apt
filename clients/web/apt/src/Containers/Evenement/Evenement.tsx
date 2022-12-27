import { Card, Carousel, Col } from 'antd';
import React, { FC } from 'react';
import { BiCalendarEvent } from 'react-icons/bi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import EvenementItem from '@components/EvenementItem/EvenementItem';
import './style.css';

interface EventsProps {
  titre: string;
  donne: Array<any>[any];
}

const Evenement: FC<EventsProps> = ({ titre, donne }) => {
  console.log(donne);

  return (
    <>
      <Card className="evenement-container">
        <Col className="evenement-header">
          <div>
            <BiCalendarEvent size={16} />
            <span>{titre}</span>
          </div>
        </Col>
        <Col className="evenement-body">
          <Carousel
            centerMode={true}
            centerPadding="30px"
            infinite={true}
            draggable={true}
            effect="scrollx"
            dots={false}
          >
            {donne.Evenement.map((item: any) => {
              return (
                <div>
                  <EvenementItem image={item.Image} titre={item.Titre} subTitre={item.SubTitre} />
                </div>
              );
            })}
          </Carousel>
        </Col>
        <Col className="evenement-plus">
          <Link to="/coms">
            <small>
              <b>
                Voir plus ... <MdKeyboardArrowRight size={20} />
              </b>
            </small>
          </Link>
        </Col>
      </Card>
    </>
  );
};

export default Evenement;
