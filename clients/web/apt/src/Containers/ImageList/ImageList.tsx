import { FC } from 'react';
import Image from '@components/Image/Image';
import './style.css';

interface EvenementInterface {
  Titre: string;
  SubTitre: string;
  Image: string;
}

interface EventsProps {
  dataList: EvenementInterface[];
}

const ImageList: FC<EventsProps> = ({ dataList }) => {
  return (
    <>
      <div className="communaute-o-body">
        {dataList.map((item: EvenementInterface) => {
          return <Image src={item.Image} width={36} height={36} circle={true} />;
        })}
      </div>
    </>
  );
};

export default ImageList;
