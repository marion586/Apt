import { FC } from 'react';
import { Row, Col } from 'antd';
import './style.css';
import Image from '@components/Image/Image';
import { HeartFilled } from '@ant-design/icons';
import { MdMessage } from 'react-icons/md';
import PublicationAction from '@components/PublicationAction';
import PdpCustom from '@components/PdpCustom';
import PostTextCostum from '@components/PostTextCostum/PostTextCostum';

interface commentProps {
  comment: {
    image: string;
    name: string;
    postTime: Date;
    text: string;
    merite: number;
  };
}

const Comment: FC<commentProps> = ({ comment }) => {
  return (
    <>
      <Row className="comment-wrapper">
        <Col flex="auto">
          <PdpCustom
            image={<Image circle={true} src={comment.image} width={29} height={29} />}
            title={comment.name}
            postTime={comment.postTime}
            gutter={11}
          />

          <div className="comment-content">
            <PostTextCostum postText={comment.text} />

            <Row className="comment-merite" gutter={43}>
              <Col>
                <PublicationAction
                  icon={<HeartFilled style={{ color: '#3644D9' }} />}
                  content="Mérite"
                  total={comment.merite}
                />
              </Col>
              <Col>
                <PublicationAction icon={<MdMessage style={{ color: '#3644D9' }} />} content="Répondre" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Comment;
