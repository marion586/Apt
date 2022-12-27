import { Divider, Form, Input, Typography } from 'antd';
import { FC } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Font, Theme } from '@themes/apt.theme';
import ButtonCustom from '@components/ButtonCustom';
import Heading from '@components/Heading';
import Image from '@components/Image/Image';
import StatCustom from '@components/StatCustom/StatCustom';
import './style.css';

const { Text, Paragraph } = Typography;

interface Invitation {
  imageUser: string;
  userName: string;
  descriptionUser: string;
  themeChallenge: string;
  imageChallenge: string;
  DateChallenge: string;
  HeureChallenge: string;
  DureeChallenge: string;
  Merite: number;
}

interface Props {
  dataChallenge: Invitation;
}

const ChallengeComponent: FC<Props> = ({ dataChallenge }) => {
  const ImageTheme = <div className="theme-name">{dataChallenge.themeChallenge}</div>;
  const statsItems = [{ label: 'Mérites', count: dataChallenge.Merite }];

  return (
    <>
      <div className="act-challenge">
        <div>
          <div className="challenge-profil">
            <Image src={dataChallenge.imageUser} width={78} height={78} circle />
            <Heading title={dataChallenge.userName} level={4} />
            <Paragraph>{dataChallenge.descriptionUser}</Paragraph>
            <div>
              <StatCustom type={undefined} items={statsItems} />
              <ButtonCustom size="small" type={Theme.button.primary} content="Voir profil" />
            </div>
          </div>
          <Divider />
          <div className="challenge-detaille">
            <Text style={{ fontFamily: Font.family }}>vous invite à challenger :</Text>
            <Form layout="vertical" className="act-challenge-body-content-body-item">
              <Form.Item label="Date et heure">
                <Input value={dataChallenge.DateChallenge + ' - ' + dataChallenge.HeureChallenge} disabled={true} />
              </Form.Item>
            </Form>
            <Form layout="vertical" className="act-challenge-body-content-body-item">
              <Form.Item label="Durée">
                <Input value={dataChallenge.DureeChallenge} disabled={true} />
              </Form.Item>
            </Form>
            <Form layout="vertical" className="act-challenge-body-content-body-item">
              <Form.Item label="Thème">
                <div className="image-theme">
                  <Image src={dataChallenge.imageChallenge} width={'100%'} height={28} content={ImageTheme} />
                </div>
              </Form.Item>
            </Form>
            <div className="act-challenge-footer">
              <ButtonCustom size="small" icon={<FaTimes />} type={Theme.button.danger} content="Refuser" />
              <ButtonCustom size="small" icon={<FaCheck />} type={Theme.button.success} content="Accepter" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeComponent;
