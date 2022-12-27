import React, { FC } from 'react';
import EvenementItemCarousel from '@components/EvenementItemCarousel/EvenementItemCarousel';
import './style.css';

interface EvenementInterface {
  Titre: string;
  SubTitre: string;
  Image: string;
}

interface EventsProps {
  dataEvents: EvenementInterface[];
}

const EvenementContainer: FC<EventsProps> = ({ dataEvents }) => {
  return (
    <>
      <EvenementItemCarousel dataEvents={dataEvents} />
    </>
  );
};

export default EvenementContainer;
