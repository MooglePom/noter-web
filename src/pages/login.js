import React, { Component } from "react";
import { Layout, Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";
const { Content } = Layout;

export default class Login extends Component {
  handleSubmit() {
    // Handle Sign in here.
  }

  render() {
    return (
      <Layout style={{ backgroundColor: "#ECECEC", height: "100vh" }}>
        <Content style={{ padding: "5em" }}>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              width: 250
            }}
          >
            <h1 style={{ fontWeight: "800" }}>Login</h1>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  size="large"
                  placeholder="E-Mail"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  size="large"
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" size="large" block htmlType="submit">
                  Log in
                </Button>
                Or <Link to="/register">register now!</Link>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    );
  }
}
