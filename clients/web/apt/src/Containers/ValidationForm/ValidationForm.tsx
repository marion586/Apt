import React, { FC } from 'react';
import './style.css';
import { Form, Input, Space, Row, Col } from 'antd';
import './style.css';
import { Theme } from '@themes/apt.theme';
import BackButton from '@components/backButton/BackButton';
import Heading from '@components/Heading';
import ButtonCustom from '@components/ButtonCustom';

interface ValidationFormProps {
  title: string;
}

const ValidationForm: FC<ValidationFormProps> = ({ title }) => {
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {};
  return (
    <>
      <BackButton content="Revenir" />

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
            label="Saisissez le code de validation"
            name="email"
            rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
            extra="Renvoyer le code après 30 secondes"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Input.Group size="large">
              <Row gutter={8}>
                <Col span={4}>
                  <Input maxLength={1} defaultValue="1" />
                </Col>
                <Col span={4}>
                  <Input maxLength={1} defaultValue="2" />
                </Col>
                <Col span={4}>
                  <Input maxLength={1} defaultValue="3" />
                </Col>
                <Col span={4}>
                  <Input maxLength={1} defaultValue="4" />
                </Col>
                <Col span={4}>
                  <Input maxLength={1} defaultValue="5" />
                </Col>
              </Row>
            </Input.Group>
          </Form.Item>
          <br />
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space size="large">
              <ButtonCustom type={Theme.button.primary} href="/forgot/validation/renew" content="Vérifier" />
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ValidationForm;
