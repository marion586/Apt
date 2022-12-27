import React, { FC } from 'react';
import { Form, Input, Space, Typography } from 'antd';
import './style.css';
import { Theme } from '@themes/apt.theme';
import ButtonCustom from '@components/ButtonCustom';
import Heading from '@components/Heading';

const { Link } = Typography;

interface LoginFormProps {
  title: string;
  signupHref?: string;
}

const LoginForm: FC<LoginFormProps> = ({ title, signupHref }) => {
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {};
  return (
    <>
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
            label="Adresse e-mail ou pseudonyme"
            name="username"
            rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mot de passe"
            name="password"
            rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Link href="/forgot">Mot de passe oublié ?</Link>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space size="large">
              <ButtonCustom type={Theme.button.primary} content="Se connecter" />
              <span>ou</span>
              <ButtonCustom href={signupHref} type={Theme.button.secondary} content="S'inscrire" />
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
