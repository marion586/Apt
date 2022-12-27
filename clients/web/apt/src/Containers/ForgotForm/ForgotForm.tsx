import React, { FC } from 'react';
import BackButton from '@components/backButton/BackButton';
import './style.css';
import { Form, Input, Space } from 'antd';
import './style.css';
import { Theme } from '@themes/apt.theme';
import ButtonCustom from '@components/ButtonCustom';
import Heading from '@components/Heading';

interface ForgotFormProps {
  title: string;
}

const ForgotForm: FC<ForgotFormProps> = ({ title }) => {
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {};
  return (
    <>
      <BackButton content="Se connecter" />

      <Heading level={2} title={title} />
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
            label="Veuillez entrer votre email"
            name="email"
            rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
          >
            <Input />
          </Form.Item>
          <br />
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space size="large">
              <ButtonCustom type={Theme.button.primary} href="/forgot/validation" content="Envoyer le code" />
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ForgotForm;
