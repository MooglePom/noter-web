import React from "react";
import { List, Row, Col, Icon } from "antd";
import moment from "moment";

export default ({ note }) => (
  <List.Item style={{ display: "block" }}>
    <Row>
      <Col xs={22}>
        <Row style={{ marginBottom: "5px" }}>
          <Col xs={24}>
            <strong>{note.title}</strong>
            <span style={{ float: "right" }}>
              Created <strong>{moment(note.createdAt).from()}</strong>
            </span>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#aaa"
            }}
            xs={24}
          >
            {note.description}
          </Col>
        </Row>
      </Col>
      <Col xs={2}>
        <Icon
          style={{
            textAlign: "right",
            marginRight: "auto",
            marginLeft: "auto",
            display: "block",
            marginTop: "3px"
          }}
          type="right"
        />
      </Col>
    </Row>
  </List.Item>
);
