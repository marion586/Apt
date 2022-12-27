import React, { FC } from 'react';
import { Form, Input, Select, Row, Col, DatePicker } from 'antd';
import { Theme, Font } from '@themes/apt.theme';
import { FaSave, FaEdit } from 'react-icons/fa';
import ButtonCustom from '@components/ButtonCustom';
import Heading from '@components/Heading';
import './style.css';

const { Option } = Select;

interface ProfilAboutFormProps {
  title: string;
}

const ProfilAboutForm: FC<ProfilAboutFormProps> = ({ title }) => {
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {};

  const contactPrefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select placeholder="+261" style={{ width: 80 }}>
        <Option value="261">+261</Option>
        <Option value="33">+33</Option>
      </Select>
    </Form.Item>
  );

  const dateFormatBirth = 'DD/MM/YYYY';

  return (
    <>
      <Heading level={5} title={title} />
      <div className="profil-form-btn-edit">
        <ButtonCustom icon={<FaEdit />} type={Theme.button.default} content="Modifier" />
      </div>
      <div style={{ fontFamily: Font.family }} className="profil-about-form">
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
                label="Prénom"
                name="lastname"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Form.Item
                label="Nom"
                name="firstname"
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
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={11}>
              <Form.Item
                label="Date de naissance"
                name="birth_date"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <DatePicker placeholder="jj/mm/aaaa" format={dateFormatBirth} style={{ width: '100%' }} />
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

          <Row>
            <Col span={11}>
              <Form.Item
                label="Situation amoureuse"
                name="situation"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Select placeholder="Célibataire / En couple / Compliquée">
                  <Option value="single">Célibataire</Option>
                  <Option value="married">En couple</Option>
                  <Option value="other">Compliquée</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={2}></Col>

            <Col span={11}>
              <Form.Item
                label="Adresse"
                name="adresse"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={11}>
              <Form.Item
                label="contact"
                name="tel"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Input addonBefore={contactPrefixSelector} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Form.Item
                label="Pays"
                name="country"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Select placeholder="Madagascar">
                  <Option value="mg">Madagascar</Option>
                  <Option value="fr">France</Option>
                  <Option value="ch">Chine</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={11}>
              <Form.Item
                label="Emploi et scolarité"
                name="job"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Form.Item
                label="Artiste favorite"
                name="favorite"
                rules={[{ required: true, message: 'Ce champ ne doit pas être vide!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item wrapperCol={{ offset: 8, span: 11 }} className="profil-save-btn">
            <ButtonCustom icon={<FaSave />} type={Theme.button.success} content="Enregistrer" />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ProfilAboutForm;
