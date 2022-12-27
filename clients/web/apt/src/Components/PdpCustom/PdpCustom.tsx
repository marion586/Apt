import { FC, ReactNode } from 'react';
import Heading from '@components/Heading';
import { Col, Row, Typography } from 'antd';
import './style.css';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';

dayjs.extend(relativeTime);
dayjs.locale('fr');

const { Text } = Typography;

interface PdpCustomProps {
  image: ReactNode;
  title: string;
  postTime?: Date | string;
  gutter: number;
}

const PdpCustom: FC<PdpCustomProps> = ({ image, title, postTime, gutter }) => {
  return (
    <>
      <Row gutter={gutter}>
        <Col>{image}</Col>
        <Col className="pdp-content">
          <Heading level={5} title={title} />
          <Text className="pdpCustom-post-time" type="secondary">
            {dayjs(postTime).fromNow()}
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default PdpCustom;
