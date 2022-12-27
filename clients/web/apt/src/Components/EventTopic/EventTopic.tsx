import Heading from '@components/Heading';
import './style.css';
import React, { FC } from 'react';
import { BiCalendarEvent } from 'react-icons/bi';
type Eventprops = {
  title: string;
  type: string;
};

const EventTopic: FC<Eventprops> = ({ title, type }) => {
  return (
    <>
      {type === 'title' ? (
        <div className="event-topic-title">
          <BiCalendarEvent size={20} />
          <Heading title={title} level={4} cardTitle={true} />
        </div>
      ) : (
        <div className="event-topic-subtitle">
          <BiCalendarEvent size={16} />
          <Heading title={title} level={5} cardTitle={true} />
        </div>
      )}
    </>
  );
};

export default EventTopic;
