import { FC } from 'react';
import './style.css';
import { Row, Col, Input, Divider } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { FaEllipsisH } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { BsFillEmojiSmileFill, BsImageFill } from 'react-icons/bs';
import { MdMessage } from 'react-icons/md';
import Image from '@components/Image/Image';
import { Theme } from '@themes/apt.theme';
import PublicationAction from '@components/PublicationAction';
import PdpCustom from '@components/PdpCustom/PdpCustom';
import Comment from '@components/Comment/Comment';
import PostTextCostum from '@components/PostTextCostum/PostTextCostum';
export interface PubState {
  user: {
    image: string;
    title: string;
    postTime: Date;
  };
  postText: string;
  imageUrl: string;
  merite: number;
  commentaires: {
    image: string;
    name: string;
    text: string;
    postTime: Date;
    merite: number;
  }[];
}

const PublicationCard: FC<PubState> = ({ user, postText, imageUrl, merite, commentaires }) => {
  return (
    <>
      <div
        className="publication-content "
        style={{ borderRadius: Theme.borderBase.borderRadius, border: Theme.borderBase.border }}
      >
        <Row justify="space-between" className="publication-content-head">
          <Col className="publication-content-profil">
            <PdpCustom
              image={<Image circle={true} src={user.image} width={36} height={36} />}
              title={user.title}
              postTime={user.postTime}
              gutter={16}
            />
          </Col>

          <Col>
            <FaEllipsisH className="publication-wrapper-faEllipsisH" />
          </Col>
        </Row>

        <div className="publication-content-container">
          <Row className="publication-content-legend">
            <Col>
              <PostTextCostum postText={postText} />
            </Col>
          </Row>

          <Row className="publication-content-image" style={{ borderRadius: Theme.borderBase.borderRadius }}>
            <Image src={imageUrl} width="75%" height={275} />
          </Row>

          <Row justify="space-between" className="publication-comment">
            <Col>
              <PublicationAction icon={<HeartFilled style={{ color: '#3644D9' }} />} content="Mérite" total={merite} />
            </Col>

            <Col className="publication-comment-action">
              <PublicationAction
                icon={<MdMessage style={{ color: '#3644D9' }} />}
                content="Commentaires"
                total={commentaires.length}
              />
              <PublicationAction icon={<FiShare2 style={{ color: '#3644D9' }} />} content="Partager" />
            </Col>
          </Row>

          <Divider style={{ margin: '0px' }} />

          {commentaires.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}

          <Row className="publication-content-inupt-message" justify="start">
            <Col flex={'30px'}>
              <Image circle={true} src={user.image} width={29} height={29} />
            </Col>

            <Col flex="auto">
              <Input
                placeholder="Ecrire un message ..."
                suffix={
                  <Row className="publication-content-icon">
                    <BsImageFill className="publication-content-icon-item" />
                    <BsFillEmojiSmileFill className="publication-content-icon-item" />
                  </Row>
                }
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default PublicationCard;
