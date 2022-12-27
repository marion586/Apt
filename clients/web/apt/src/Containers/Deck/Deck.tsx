import React, { FC, ReactNode } from 'react';
import { Row, Col, Divider } from 'antd';
import { Positioning } from '@themes/apt.theme';
import './style.css';
import Heading from '@components/Heading';

interface DeckProps {
  form: ReactNode;
}

const Deck: FC<DeckProps> = ({ form }) => {
  return (
    <section className="bg">
      <div className="sg content" style={Positioning.center}>
        <Row>
          <Col span={10} className="xy-center">
            <div className="image-globe">
              <Heading
                level={2}
                title="
              Photo globe
              avec des
              signes de talents
            "
              />
            </div>
          </Col>
          <Col span={2} className="xy-center">
            <Divider type="vertical" />
          </Col>
          <Col span={12}>{form}</Col>
        </Row>
      </div>
    </section>
  );
};

export default Deck;
