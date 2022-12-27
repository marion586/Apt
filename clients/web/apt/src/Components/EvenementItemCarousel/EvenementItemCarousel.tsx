import { Carousel } from 'antd';
import React, { FC } from 'react';
import EvenementItem from '@components/EvenementItem/EvenementItem';
import './style.css';

interface EvenementCarousInterface {
  Titre: string;
  SubTitre: string;
  Image: string;
}

interface Props {
  dataEvents: EvenementCarousInterface[];
}

const EvenementItemCarousel: FC<Props> = ({ dataEvents }) => {
  return (
    <>
      <Carousel centerMode={true} centerPadding="25px" infinite={true} draggable={true} effect="scrollx" dots={false}>
        {dataEvents.map((item: EvenementCarousInterface) => {
          return (
            <div>
              <EvenementItem image={item.Image} titre={item.Titre} subTitre={item.SubTitre} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default EvenementItemCarousel;
