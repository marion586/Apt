import { Tooltip, Typography } from 'antd';
import { FC } from 'react';
import Merite1 from '@assets/merites/merite_1.svg';
import Merite2 from '@assets/merites/merite_2.svg';
import Merite3 from '@assets/merites/merite_3.svg';
import Merite4 from '@assets/merites/merite_4.svg';
import Merite5 from '@assets/merites/merite_5.svg';
import { Theme } from '@themes/apt.theme';
import Image from '@components/Image/Image';
import './style.css';

const { Text } = Typography;
interface commentPprops {
  icon: JSX.Element;
  content: string;
  total?: number;
}

const UserAction: FC<commentPprops> = ({ icon, content, total }) => {
  let border = '0';
  if (total) {
    border = Theme.borderBase.border;
  }
  return (
    <>
      {content === 'Mérite' ? (
        <>
          <Tooltip
            placement="topLeft"
            color={'white'}
            title={
              <span className="publication-action-icon-block">
                <Image src={Merite1} width={30} height={30} />
                <Image src={Merite2} width={30} height={30} />
                <Image src={Merite3} width={30} height={30} />
                <Image src={Merite4} width={30} height={30} />
                <Image src={Merite5} width={30} height={30} />
              </span>
            }
          >
            <Text className="publication-action-icon-text">
              {icon}
              <span>{content}</span>
              <span className="publication-action-total" style={{ borderLeft: border }}>
                {total}
              </span>
            </Text>
          </Tooltip>
        </>
      ) : (
        <>
          <Text className="publication-action-icon-text">
            {icon}
            <span>{content}</span>
            {total && (
              <>
                <span className="publication-action-total" style={{ borderLeft: border }}>
                  {total}
                </span>
              </>
            )}
          </Text>
        </>
      )}
    </>
  );
};

export default UserAction;
