import { FC } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './style.css';
const { Text } = Typography;
interface Props {
  titre: string;
  link: string;
}
const FooterText: FC<Props> = ({ titre, link }) => {
  return (
    <div className="footerText">
      <Link to={'/' + link}>
        <Text strong>
          {titre} ... <MdKeyboardArrowRight size={20} />
        </Text>
      </Link>
    </div>
  );
};

export default FooterText;
