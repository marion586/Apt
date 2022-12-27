import { FC } from 'react';

import './style.css';

interface LegendProps {
  postText: string;
}
let handlePostText = (text: string) => {
  const splited = text.split('\n');
  return splited.map((items, index) => (
    <p className="post-text-costum-wrapper" key={index}>
      {items?.split(' ').map((item, ind) =>
        item.startsWith('#') ? (
          <span key={ind} className="legend-hashtag">
            {item}{' '}
          </span>
        ) : (
          <span className="legend-content" key={ind}>
            {item}{' '}
          </span>
        ),
      )}
    </p>
  ));
};

const PublicationLegend: FC<LegendProps> = ({ postText }) => {
  return <>{handlePostText(postText)}</>;
};

export default PublicationLegend;
