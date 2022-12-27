import { Avatar, Col, Divider, Dropdown, Input, Menu, Row, Typography } from 'antd';
import { IoEllipse } from 'react-icons/io5';
import { FC, useEffect, useRef, useState } from 'react';
import { FaEllipsisH, FaSearch } from 'react-icons/fa';
import SendMessageInput from '@components/SendMessageInput';
import './style.css';
import React from 'react';

const { Text } = Typography;

interface message {
  id: string;
  message: string;
  sender: string;
  to: string;
  date: string;
}
type MessageConversationDataType = {
  user: string;
  userStatus: string;
  img: string;
  message: message[];
};
type MessagConversationType = {
  data: MessageConversationDataType;
  send: (data: message) => void;
};
const menu = (
  <Menu
    className="Message-dropdown"
    items={[
      {
        label: 'menu 1',
        key: 0,
      },
      {
        label: 'menu 3',
        key: 1,
      },
    ]}
  />
);

const messageMenu = (
  <Menu
    className="Message-dropdown"
    items={[
      {
        label: 'Transferer',
        key: 0,
      },
      {
        label: 'Supprimer',
        key: 1,
      },
    ]}
  />
);

const MessagConversation: FC<MessagConversationType> = ({ data, send }) => {
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const endConversationContainer = useRef<HTMLDivElement>(null);
  const [messageData, setMessageData] = useState<message[]>(data.message);

  const srcollToBottom = () => {
    endConversationContainer.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    srcollToBottom();
  }, [data.message]);

  return (
    <Row className="Message-main">
      <Col flex="0 0 auto" className="Message-main-header">
        <Row align="middle">
          <Col flex="36px">
            <Avatar size={36} src={data.img} />
          </Col>
          <Col flex="auto" className="Message-main-header-info-container">
            <Text className="Message-main-user">{data.user}</Text>
            <Text className="Message-main-user-status">
              {data.userStatus === 'active' ? 'En ligne' : 'offline'}
              <IoEllipse size={9} className={data.userStatus} />
            </Text>
          </Col>
          <Col flex="auto" className="Message-main-header-right">
            {searchStatus ? (
              <Input
                bordered={false}
                onBlur={() => setSearchStatus(false)}
                autoFocus
                suffix={<FaSearch />}
                className="Message-main-search"
                placeholder="Rechercher..."
              />
            ) : (
              <FaSearch onClick={() => setSearchStatus(true)} size={19} className="icon" />
            )}
            <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
              <FaEllipsisH size={20} className="Message-main-header-right-ellips" />
            </Dropdown>
          </Col>
        </Row>
        <Divider className="divider" />
      </Col>
      <Col flex="100 1 auto" className="Message-main-body">
        {data.message.map((el, i) => {
          return (
            <>
              {i === 0 ? (
                <Text className="message-date">
                  {new Date(el.date).getDate() === new Date().getDate() ? 'Today' : new Date(el.date).toDateString()}
                </Text>
              ) : new Date(el.date).getDate() !== new Date(data.message[i - 1].date).getDate() ? (
                <Text className="message-date">
                  {new Date(el.date).getDate() === new Date().getDate() ? 'Today' : new Date(el.date).toDateString()}
                </Text>
              ) : (
                ''
              )}

              <div key={i} className={el.sender === 'me' ? 'message-box message-sent' : 'message-box'}>
                <div className="message-text-container">
                  <Text className="message">
                    {el.message}
                    <Dropdown
                      className="message-menu"
                      placement={el.sender === 'me' ? 'bottomRight' : 'bottomLeft'}
                      overlay={messageMenu}
                      trigger={['click']}
                    >
                      <FaEllipsisH size={19} className="message-icon" />
                    </Dropdown>
                  </Text>
                  {i < data.message.length - 1 && data.message[i].sender === data.message[i + 1].sender ? (
                    ''
                  ) : (
                    <Text className="message-time">
                      {`
                      ${new Date(el.date).toLocaleDateString()} at 
                      ${new Date(el.date).getHours().toString()}:${new Date(el.date).getMinutes().toString()}
                      `}
                    </Text>
                  )}
                </div>
              </div>
            </>
          );
        })}
        <div ref={endConversationContainer}></div>
      </Col>
      <Col flex="0 0 auto">
        <SendMessageInput
          onSend={(message) => {
            const dataTosend = {
              id: (data.message.length + 1).toString(),
              message: message,
              sender: 'me',
              to: data.user,
              date: new Date().toString(),
            };
            send(dataTosend);
            setMessageData([...messageData, dataTosend]);
          }}
        />
      </Col>
    </Row>
  );
};

export default MessagConversation;
