import { Card, Col, Row } from 'antd';
import { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiCalendarEvent } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { MdSend } from 'react-icons/md';
import ButtonCustom from '@components/ButtonCustom/ButtonCustom';
import ChallengeComponent from '@components/ChallengeComponent/ChallengeComponent';
import image1 from '@images/1.jpg';
import image2 from '@images/2.jpg';
import { Theme } from '@themes/apt.theme';
import GoogleAds from '@containers/GoogleAds/GoogleAds';
import CardGrid from '@components/CardGrid/CardGrid';
import Heading from '@components/Heading/Heading';
import './style.css';

const dataChallenge = {
  ThemeItem: [
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
  CommunauteItem: [
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
    {
      Titre: 'Art',
      SubTitre: '+1K Participants',
      Image: image2,
    },
    {
      Titre: 'Art',
      SubTitre: '+1K Participants',
      Image: image2,
    },
  ],
  EvenementItem: {
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
        Titre: 'Art',
        SubTitre: '+1K Participants',
        Image: image2,
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
  },
  Invitation: {
    imageUser: image1,
    userName: 'Rabe Herinirina',
    descriptionUser: 'Danseur professionnel',
    themeChallenge: 'DANCE CLASSIQUE',
    imageChallenge: image2,
    DateChallenge: '02/04/22',
    HeureChallenge: '14:00',
    DureeChallenge: '10 Minutes',
    Merite: 126,
  },
};

const AccueilContainer: FC = () => {
  return (
    <>
      <Row justify="space-between" gutter={6}>
        <Col span={5}>
          <CardGrid
            titre="Thème Challenge"
            link="userComs"
            icon={<HiUsers size={16} />}
            iconOption={<FaPlus size={14} />}
            dataElement={dataChallenge.ThemeItem}
            cardContent="grid"
          />
          <CardGrid
            titre="Vos communautés"
            link="userComs"
            icon={<HiUsers size={16} />}
            iconOption={<FaPlus size={14} />}
            top="card-spacing-top"
            dataElement={dataChallenge.CommunauteItem}
            cardContent="grid"
          />
        </Col>
        <Col span={14} style={{ padding: '0 21px' }}>
          <Row className="act-container">
            <Col span={24}>
              <div className="act-container-header">
                <Heading title="Invité quelqu'un à challenger" level={4} icon={<MdSend />} />
                <ButtonCustom icon={<AiOutlinePlus />} type={Theme.button.warning} content="Inviter" />
              </div>
            </Col>
            <Col span={24}>
              <Card className="act-container-body">
                <ChallengeComponent dataChallenge={dataChallenge.Invitation} />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          <GoogleAds />
          <CardGrid
            titre="Evénements du jour"
            link="eventsLink"
            icon={<BiCalendarEvent size={16} />}
            top="card-spacing-top-act"
            cardContent="carousel"
            dataElement={dataChallenge.EvenementItem.Moment}
          />
          <CardGrid
            titre="Evénements récents"
            link="eventsLink"
            icon={<BiCalendarEvent size={16} />}
            top="card-spacing-top-events"
            cardContent="carousel"
            dataElement={dataChallenge.EvenementItem.Recent}
          />
          <CardGrid
            titre="Evénements à venir"
            link="eventsLink"
            icon={<BiCalendarEvent size={16} />}
            top="card-spacing-top-events"
            cardContent="carousel"
            dataElement={dataChallenge.EvenementItem.Futur}
          />
        </Col>
      </Row>
    </>
  );
};

export default AccueilContainer;
