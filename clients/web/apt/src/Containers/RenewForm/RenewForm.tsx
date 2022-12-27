import { Form, Input, Space } from 'antd';
import React, { FC, useState } from 'react';
import { MdTaskAlt } from 'react-icons/md';
import BackButton from '@components/backButton/BackButton';
import ButtonCustom from '@components/ButtonCustom';
import Heading from '@components/Heading';
import { Colors, Theme } from '@themes/apt.theme';
import './style.css';

interface RenewFormProps {
  title: string;
}

const RenewForm: FC<RenewFormProps> = ({ title }) => {
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {};
  const [validated] = useState(true);

  return (
    <>
      <BackButton content="Revenir" />
      {validated ? (
        <>
          <div>
            <br />
            <MdTaskAlt color={Colors.secondary} size={40} />
          </div>
          <Heading level={2} title="Félicitation !" />
          <p>Veuillez-vous connecter blablabla</p>
          <br />
          <ButtonCustom type={Theme.button.secondary} content="Se connecter" href="/" />
        </>
      ) : (
        <>
          <Heading level={2} title={title} />
          <p>Veuillez entrer votre nouveau mot de passe</p>
          <div>
            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Mot de passe"
                name="password"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Confirmez votre mot de passe"
                name="confirmPassword"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Input.Password />
              </Form.Item>
              <br />
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Space size="large">
                  <ButtonCustom type={Theme.button.primary} content="Terminer" />
                </Space>
              </Form.Item>
            </Form>
          </div>
        </>
      )}
    </>
  );
};

export default RenewForm;
