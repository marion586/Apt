import { Col, Input, Row, Typography } from 'antd';
import { FC } from 'react';
import { MdMessage } from 'react-icons/md';
import { FaChevronRight, FaPlus, FaSearch } from 'react-icons/fa';
import React from 'react';
import UserListCustom from '@components/UserListCustom';
import './style.css';
const { Text } = Typography;
type MessageDataType = {
  id: string;
  message: string;
  sender: string;
  to: string;
  date: string;
};
interface UserDataType {
  id: string;
  user: string;
  img: string;
  message: MessageDataType[];
}
type MessageUserListType = {
  data: UserDataType[];
  selectedUser: string;
  onUserClick: (id: string) => void;
};
const MessageUserList: FC<MessageUserListType> = ({ data, selectedUser, onUserClick }) => {
  return (
    <Row className="Message-left-side">
      <Col flex="0 0 auto" className="Message-left-side-header">
        <Row>
          <Col flex="auto" className="Message-title-container Message-left-side-section">
            <span>
              <MdMessage size={15} />
              <span className="Message-title">Vos messages</span>
            </span>
            <span className="Message-title-plus-btn">
              <FaPlus size={10} />
            </span>
          </Col>
          <Col flex="auto" className="Message-left-side-section">
            <Input
              type="text"
              placeholder="Rechercher ..."
              suffix={<FaSearch size={12} className="input-search-left-side-icon" />}
              className="input-search-left-side"
              bordered={false}
            />
          </Col>
        </Row>
      </Col>
      <Col flex="100 1 auto" className="Message-left-side-body">
        {data.map((el, i) => (
          <UserListCustom
            key={i}
            ID={el.id}
            user={el.user}
            lastMessage={el.message[el.message.length - 1].message}
            img={el.img}
            selectedUser={selectedUser}
            onclick={(id) => onUserClick(id)}
          />
        ))}
      </Col>
      <Col flex="0 0 auto" className="Message-left-side-section">
        <Text className="show-more">
          Voir plus...
          <span className="show-more-icon">
            <FaChevronRight width={7} height={11} />
          </span>
        </Text>
      </Col>
    </Row>
  );
};

export default MessageUserList;
