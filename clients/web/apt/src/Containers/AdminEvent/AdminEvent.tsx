import ButtonCustom from '@components/ButtonCustom';
import CardGrid from '@components/CardGrid/CardGrid';
import EventTopic from '@components/EventTopic';
import Heading from '@components/Heading';
import { Theme } from '@themes/apt.theme';
import { Col, Row } from 'antd';
import React, { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiCalendarEvent } from 'react-icons/bi';
import { FaToggleOn } from 'react-icons/fa';
import './style.css';
import image1 from '@images/1.jpg';
import image2 from '@images/2.jpg';
import EvenementItem from '@components/EvenementItem/EvenementItem';
type adminEventProps = {};
const eventItem = {
  Moment: [
    {
      Titre: 'Danse',
      SubTitre: '+1K Participants',
      Image: image1,
    },
    {
      Titre: 'Concours',
      SubTitre: '+1K Participants',
      Image: image2,
    },
    {
      Titre: 'Danse',
      SubTitre: '+1K Participants',
      Image: image1,
    },
    {
      Titre: 'Art',
      SubTitre: '+1K Participants',
      Image: image2,
    },
    {
      Titre: 'Danse',
      SubTitre: '+1K Participants',
      Image: image1,
    },
    {
      Titre: 'Danse',
      SubTitre: '+1K Participants',
      Image: image1,
    },
    {
      Titre: 'Danse',
      SubTitre: '+1K Participants',
      Image: image1,
    },
    {
      Titre: 'Danse',
      SubTitre: '+1K Participants',
      Image: image1,
    },
  ],
  Recent: [
    {
      Titre: 'Danse',
      SubTitre: '+1K Participants',
      Image: image1,
    },
    {
      Titre: 'Concours',
      SubTitre: '+1K Participants',
      Image: image2,
    },
    {
      Titre: 'Art',
      SubTitre: '+1K Participants',
      Image: image2,
    },
  ],
  Futur: [
    {
      Titre: 'Danse',
      SubTitre: '+1K Participants',
      Image: image1,
    },
    {
      Titre: 'Concours',
      SubTitre: '+1K Participants',
      Image: image2,
    },
    {
      Titre: 'Art',
      SubTitre: '+1K Participants',
      Image: image2,
    },
  ],
};
const AdminEvent: FC<adminEventProps> = () => {
  return (
    <div className="admin-event-wrapper" style={{ border: Theme.borderBase.border }}>
      <Row justify="space-between" className="admin-event-header" style={{ borderBottom: Theme.borderBase.border }}>
        <Col span={18}>
          <EventTopic type="title" title="Liste d'evenement" />
        </Col>
        <Col span={6} className="left-side-title">
          <ButtonCustom icon={<AiOutlinePlus />} type={Theme.button.warning} content="Créer" />
          <div className="left-side-toggle-group">
            <Heading title="Apercu" level={5} />
            <FaToggleOn color="#4081EC" size={25} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={19}>
          <EventTopic type="subtitle" title="Liste du jours" />
          <Row className="admin-event-day">
            {eventItem.Moment.map((item, index) => (
              <Col span={5}>
                <EvenementItem image={item.Image} titre={item.Titre} subTitre={item.SubTitre} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={5}>contenu</Col>
      </Row>
    </div>
  );
};

export default AdminEvent;
