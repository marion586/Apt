import { Row, Col } from 'antd';
import { FC, useState } from 'react';
import MessageConversation from '@containers/MessageConversation';
import MessageUserList from '@containers/MessageUserList';
import { Font } from '@themes/apt.theme';
import Dashboard from '@pages/Dashboard';
import UserImage from '@images/user.jpg';
import './style.css';
type MessageDataType = {
  id: string;
  message: string;
  sender: string;
  to: string;
  date: string;
};
type UserDataType = {
  id: string;
  user: string;
  img: string;
  userStatus: string;
  message: MessageDataType[];
};
const Message: FC = () => {
  const [userData, setUserData] = useState([
    {
      id: '0',
      user: 'Asa Tanana Asa Tanana Asa Tanana',
      img: UserImage,
      userStatus: 'active',
      message: [
        {
          id: '1',
          message: 'kzkz',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date(Date.now() - 3600 * 1000 * 24).toString(),
        },
        {
          id: '2',
          message: 'kzkz lesy!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date(Date.now() - 3600 * 1000 * 24).toString(),
        },
        {
          id: '3',
          message: 'Ahoana ny fety omaly?',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date().toString(),
        },
        {
          id: '4',
          message:
            'Nafinaritra be!t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letterst is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letterst is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
        {
          id: '5',
          message: 'kzkz lesy!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
        {
          id: '6',
          message: 'Ahoana ny fety omaly?',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date().toString(),
        },
        {
          id: '7',
          message: 'Nafinaritra be!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
        {
          id: '8',
          message: 'Nafinaritra be!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
      ],
    },
    {
      id: '1',
      user: 'Rabossa',
      img: UserImage,
      userStatus: 'active',
      message: [
        {
          id: '1',
          message: 'kzkz',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date().toString(),
        },
        {
          id: '2',
          message: 'kzkz lesy!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
      ],
    },
    {
      id: '2',
      user: 'Neymar',
      img: UserImage,
      userStatus: 'active',
      message: [
        {
          id: '1',
          message: 'kzkz',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date().toString(),
        },
        {
          id: '2',
          message: 'kzkz lesy!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
      ],
    },
    {
      id: '3',
      user: 'Mane',
      img: UserImage,
      userStatus: 'offline',
      message: [
        {
          id: '1',
          message: 'kzkz',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date().toString(),
        },
        {
          id: '2',
          message: 'kzkz lesy!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
      ],
    },
    {
      id: '4',
      user: 'Asa Tanana',
      img: UserImage,
      userStatus: 'active',
      message: [
        {
          id: '1',
          message: 'kzkz',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date(Date.now() - 3600 * 1000 * 24).toString(),
        },
        {
          id: '2',
          message: 'kzkz lesy!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date(Date.now() - 3600 * 1000 * 24).toString(),
        },
        {
          id: '3',
          message: 'Ahoana ny fety omaly?',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date().toString(),
        },
        {
          id: '4',
          message:
            'Nafinaritra be!t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letterst is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letterst is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
        {
          id: '5',
          message: 'kzkz lesy!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
        {
          id: '6',
          message: 'Ahoana ny fety omaly?',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date().toString(),
        },
        {
          id: '7',
          message: 'Nafinaritra be!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
        {
          id: '8',
          message: 'Nafinaritra be!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
      ],
    },
    {
      id: '5',
      user: 'Rabossa',
      img: UserImage,
      userStatus: 'active',
      message: [
        {
          id: '1',
          message: 'kzkz',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date().toString(),
        },
        {
          id: '2',
          message: 'kzkz lesy!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
      ],
    },
    {
      id: '6',
      user: 'Neymar',
      img: UserImage,
      userStatus: 'active',
      message: [
        {
          id: '1',
          message: 'kzkz',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date().toString(),
        },
        {
          id: '2',
          message: 'kzkz lesy!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
      ],
    },
    {
      id: '7',
      user: 'Mane',
      img: UserImage,
      userStatus: 'offline',
      message: [
        {
          id: '1',
          message: 'kzkz',
          sender: 'me',
          to: 'Trano gasy',
          date: new Date().toString(),
        },
        {
          id: '2',
          message: 'kzkz lesy!',
          sender: 'Trano gasy',
          to: 'me',
          date: new Date().toString(),
        },
      ],
    },
  ]);
  const [selectedUserData, setSelectedUserData] = useState<UserDataType>(userData[0]);

  const updateSelectedUser = (id: string) => {
    const getData = userData.filter((item) => item.id === id);
    setSelectedUserData(getData[0]);
  };
  return (
    <Dashboard
      content={
        <Row className="Message-container" style={{ fontFamily: Font.family }}>
          <Col span={6} className="Message-left-side-container">
            <MessageUserList
              data={userData}
              selectedUser={selectedUserData.id}
              onUserClick={(id) => updateSelectedUser(id)}
            />
          </Col>
          <Col flex="auto">
            <MessageConversation
              data={selectedUserData}
              send={(data) => {
                let prevUserData = userData;
                prevUserData[parseInt(selectedUserData.id)].message = [
                  ...prevUserData[parseInt(selectedUserData.id)].message,
                  data,
                ];
                setUserData(prevUserData);
              }}
            />
          </Col>
        </Row>
      }
    />
  );
};

export default Message;
