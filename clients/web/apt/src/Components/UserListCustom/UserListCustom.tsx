import { Row, Col, Avatar, Typography } from 'antd';
import { FC } from 'react';
import './style.css';
const { Text } = Typography;
type UserListCustomType = {
  ID: string;
  user: string;
  lastMessage: string;
  img: string;
  selectedUser: string;
  onclick: (id: string) => void;
};
const UserListCustom: FC<UserListCustomType> = ({ ID, user, lastMessage, img, selectedUser, onclick }) => {
  return (
    <Row
      className={
        selectedUser === ID
          ? 'Message-left-side-section-user Message-left-side-section-user-active'
          : 'Message-left-side-section-user'
      }
      onClick={() => onclick(ID)}
    >
      <Col flex="100%" className="col-center">
        <div>
          <Avatar size={36} src={img} />
        </div>
        <div className="Message-left-side-text">
          <Text className="Message-left-side-user">{user}</Text>
          <Text className="Message-left-side-last-message">{lastMessage}</Text>
        </div>
      </Col>
    </Row>
  );
};
export default UserListCustom;
