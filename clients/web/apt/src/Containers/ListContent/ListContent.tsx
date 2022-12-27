import React, { FC } from 'react';
import GridCommunauteItem from '@components/GridCommunauteItem/GridCommunauteItem';
import './style.css';

interface CommunauteUserProps {
  Titre: string;
  SubTitre: string;
  Image: string;
}

interface Props {
  dataList: CommunauteUserProps[];
}

const ListeContent: FC<Props> = ({ dataList }) => {
  return (
    <>
      {dataList.map((item: CommunauteUserProps) => {
        return <GridCommunauteItem hover={true} titre={item.Titre} description={item.SubTitre} image={item.Image} />;
      })}
    </>
  );
};

export default ListeContent;
