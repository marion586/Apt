import { Card, Col, Form, Input, Row, Upload } from 'antd';
import React, { FC } from 'react';
import { FaCheck, FaEdit, FaImages, FaLink, FaVideo } from 'react-icons/fa';
import Heading from '@components/Heading';
import ButtonCustom from '@components/ButtonCustom/ButtonCustom';
import { Colors, Theme } from '@themes/apt.theme';
import './style.css';

const PostForm: FC = () => {
  const onSubmit = (values: any) => {};

  return (
    <>
      <Card className="post-container">
        <div className="post-container-header">
          <Heading title="Créer un nouveau poste" level={3} icon={<FaEdit />} cardTitle />
        </div>
        <Form onFinish={onSubmit}>
          <Form.Item name="post-content" className="post-container-body">
            <Input.TextArea placeholder="Ecrire un message ..." />
          </Form.Item>
          <Row className="post-container-footer">
            <Col span={3}>
              <Form.Item name="photo">
                <Upload accept=".jpg,.png,.jpeg">
                  <span className="left-post-container-footer-item">
                    <FaImages size={18} color={Colors.warning} />
                    <p>Photo</p>
                  </span>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={3}>
              <Form.Item name="video">
                <Upload accept=".mp4,.wmv,.mov,.mkv">
                  <span className="left-post-container-footer-item">
                    <FaVideo size={18} color={Colors.danger} />
                    <p>Videos</p>
                  </span>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <span className="left-post-container-footer-item top-2">
                <FaLink size={15} />
                <p>Identifier des amies</p>
              </span>
            </Col>
            <Col span={2}></Col>
            <Col span={4}>
              <Form.Item className="p-right">
                <span className="right-post-container-footer-item top-2">
                  <ButtonCustom
                    icon={<FaCheck size={10} />}
                    size="small"
                    type={Theme.button.success}
                    content="Publier"
                  />
                </span>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default PostForm;
