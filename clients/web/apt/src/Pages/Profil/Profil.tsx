import { Typography } from 'antd';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import ProfilAboutContent from '@containers/ProfilAboutContent';
import ProfilContainer from '@containers/ProfilContainer';
import PublicationCard from '@containers/PublicationCard/PublicationCard';
import Dashboard from '@pages/Dashboard';
import imageWrapper from '@images/1.jpg';
import imageProfile from '@images/2.jpg';

const { Text } = Typography;

const commentaires = [
  {
    image: imageProfile,
    name: 'marion menye',
    text: `salama daholo o  #tsara ilay izy fa tohizo hatrany`,
    merite: 45,
    postTime: new Date(),
  },
  {
    image: imageWrapper,
    name: 'jhon white',
    text: `salama daholo  , #tsara fa tohizo! izahay manohana anareo hatrany hatrany`,
    merite: 4,
    postTime: new Date(),
  },
  {
    image: imageProfile,
    name: 'marion menye',
    text: `merci beaucoup lesy a 
     , amin #fanohanana`,
    merite: 45,
    postTime: new Date(),
  },
];
interface Param {
  tabs: string;
}

const Profil: FC = () => {
  const params: Param = useParams();

  const user = {
    image: imageProfile,
    title: 'Asa Tanana Malagasy',
    postTime: new Date(),
  };

  const merite = 321;
  const postText = `salama daholo 
  isika rehetra #tratryNyAntsaramanitra mazotoa daholo isika rehetra 
  #62ans`;
  const items = [
    {
      content: (
        <PublicationCard
          user={user}
          imageUrl={imageWrapper}
          merite={merite}
          commentaires={commentaires}
          postText={postText}
        />
      ),
      label: 'Publication',
      key: 'timeline',
    },
    { content: <Text>Suivre Container</Text>, label: 'Suivre', key: 'follow' },
    { content: <Text>Cahier de souvenir</Text>, label: 'Cahier de souvenir', key: 'story' },
    { content: <ProfilAboutContent />, label: 'A propos', key: 'about' },
  ];

  return (
    <>
      <Dashboard content={<ProfilContainer items={items} activeKey={params.tabs} />} />
    </>
  );
};

export default Profil;
