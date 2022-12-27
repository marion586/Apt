import { Col, Row } from 'antd';
import { FC } from 'react';
import { BiCalendarEvent } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import CardGrid from '@components/CardGrid/CardGrid';
import image1 from '@images/1.jpg';
import image2 from '@images/2.jpg';
import GoogleAds from '@containers/GoogleAds/GoogleAds';
import PostForm from '@containers/PostForm/PostForm';
import PublicationCard from '@containers/PublicationCard';
import SemiProfil from '@containers/SemiProfil/SemiProfil';
import './style.css';

const userSemiProfil = {
  Titre: 'UserName',
  SubTitre: '@userName',
  Image: image1,
  ImageCouverture: image2,
  link: '/user',
};

const communauteItem = [
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
];

const publication = {
  user: {
    image: image1,
    title: 'Asa Tanana Malagasy',
    postTime: new Date(),
  },
  merite: 321,
  legend: ' salama daholo isika rehetra #tratryNyAntsaramanitra mazotoa daholo isika rehetra #62ans',
  commentaires: [
    {
      image: image2,
      name: 'jhon white',
      text: 'salama daholo  , tsara fa tohizo! izahay manohana anareo hatrany hatrany',
      merite: 4,
      postTime: new Date(),
    },
  ],
};

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
};

const AccueilContainer: FC = () => {
  return (
    <>
      <Row>
        <Col span={5}>
          <SemiProfil dataUser={userSemiProfil} />
          <CardGrid
            titre="Vos communautés"
            link="userComs"
            icon={<HiUsers size={16} />}
            iconOption={<FaPlus size={14} />}
            top="card-spacing-top"
            cardContent="grid"
            dataElement={communauteItem}
          />
          <CardGrid
            titre="Autres communautés"
            link="anotherComs"
            icon={<HiUsers size={16} />}
            top="card-spacing-top"
            cardContent="image"
            dataElement={communauteItem}
          />
        </Col>
        <Col span={14} style={{ padding: '0 24px' }}>
          <PostForm />
          <div className="list-publication">
            <PublicationCard
              postText={publication.legend}
              user={publication.user}
              imageUrl={image1}
              merite={publication.merite}
              commentaires={publication.commentaires}
            />

            <PublicationCard
              postText={publication.legend}
              user={publication.user}
              imageUrl={image1}
              merite={publication.merite}
              commentaires={publication.commentaires}
            />
          </div>
        </Col>
        <Col span={5}>
          <GoogleAds />
          <CardGrid
            titre="Evénements du jour"
            link="eventsLink"
            icon={<BiCalendarEvent size={16} />}
            top="card-spacing-top"
            cardContent="carousel"
            dataElement={eventItem.Moment}
          />
          <CardGrid
            titre="Evénements récents"
            link="eventsLink"
            icon={<BiCalendarEvent size={16} />}
            top="card-spacing-top-events"
            cardContent="carousel"
            dataElement={eventItem.Recent}
          />
          <CardGrid
            titre="Evénements à venir"
            link="eventsLink"
            icon={<BiCalendarEvent size={16} />}
            top="card-spacing-top-events"
            cardContent="carousel"
            dataElement={eventItem.Futur}
          />
        </Col>
      </Row>
    </>
  );
};

export default AccueilContainer;
