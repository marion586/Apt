import { Checkbox, Col, Form, Input, Row, Select, Space } from 'antd';
import React, { FC } from 'react';
import ButtonCustom from '@components/ButtonCustom';
import Heading from '@components/Heading';
import { Colors, Font, Theme } from '@themes/apt.theme';
import './style.css';

const { Option } = Select;

interface SignupFormProps {
  title: string;
  loginHref?: string;
}

const SignupForm: FC<SignupFormProps> = ({ title, loginHref }) => {
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {};
  return (
    <>
      <Heading level={2} title={title} />
      <div style={{ fontFamily: Font.family }}>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row>
            <Col span={11}>
              <Form.Item
                label="Nom"
                name="firstname"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Form.Item
                label="Prénom"
                name="lastname"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={11}>
              <Form.Item
                label="Pseudonyme"
                name="username"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Form.Item
                label="Genre"
                name="gender"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Select placeholder="Féminin / Masculin / Autre">
                  <Option value="female">Féminin</Option>
                  <Option value="male">Masculin</Option>
                  <Option value="other">Autre</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Adresse e-mail"
            name="email"
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

          <Form.Item
            label="Confirmez votre mot de passe"
            name="confirm_password"
            rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0 }}>
            <div className="card-in">
              <Checkbox>
                <span>En cliquant sur Valider, vous accepter les</span>
                <a href="/policy/privacy" style={{ color: Colors.secondary, fontWeight: 'bold' }}>
                  {' '}
                  politiques d'utilisations{' '}
                </a>
                <span>du site.</span>
              </Checkbox>
            </div>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space size="large">
              <ButtonCustom type={Theme.button.primary} content="Valider" />
              <span>ou</span>
              <ButtonCustom href={loginHref} type={Theme.button.secondary} content="Se connecter" />
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SignupForm;
