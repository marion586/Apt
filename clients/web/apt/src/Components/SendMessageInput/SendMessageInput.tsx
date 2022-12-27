import { Input } from 'antd';
import { FC, useRef, useState } from 'react';
import { FaSmile } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import Picker from 'emoji-picker-react';
import './style.css';

type SendMessageInputType = {
  onSend: (data: string) => void;
};
const SendMessageInput: FC<SendMessageInputType> = ({ onSend }) => {
  const [messageText, setMessageText] = useState<string>('');
  const [emojiKeyboardStatus, setEmojiKeyboardStatus] = useState<string>('none');
  const messageInputRef = useRef<any>(null);

  const send = () => {
    if (messageText.replaceAll(' ', '').length > 0) {
      onSend(messageText);
      setMessageText('');
      setEmojiKeyboardStatus('none');
    }
  };

  return (
    <>
      <Input
        ref={messageInputRef}
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        onPressEnter={send}
        className="Send-Message-input "
        placeholder="Message..."
        suffix={
          <>
            <FaSmile
              size={16}
              className="Send-Message-input-icon"
              onClick={() =>
                emojiKeyboardStatus === 'none' ? setEmojiKeyboardStatus('flex') : setEmojiKeyboardStatus('none')
              }
            />
            <IoSend size={18} className="Send-Message-input-icon" onClick={send} />
          </>
        }
      />
      <Picker
        pickerStyle={{
          display: emojiKeyboardStatus,
        }}
        onEmojiClick={(e, data) => {
          setMessageText(messageText + data.emoji);
          messageInputRef.current.focus();
        }}
        disableSearchBar={true}
      />
    </>
  );
};

export default SendMessageInput;
