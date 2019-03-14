import React, { Component } from "react";
import { List, Layout, Row, Col, Icon } from "antd";
import NoteList from "../components/note_list";
import ScrollArea from "react-scrollbar";

const { Content } = Layout;

const notes = [
  {
    _id: "12354987234",
    title: "Test Note #1",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #2",
    description: "Here is another kinda long note that has gone too far...",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #3",
    description: "What to do...",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #4",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #5",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #6",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #6",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #6",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #6",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #6",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #6",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #6",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #6",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #6",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  },
  {
    _id: "12354987234",
    title: "Test Note #7",
    description:
      "Here is a long winded note application that allows you to do whatever.",
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedWith: []
  }
];

export default class Index extends Component {
  render() {
    return (
      <div>
        <Layout style={{ backgroundColor: "#ECECEC", height: "100vh" }}>
          <Content style={{ padding: "5em" }}>
            <Row>
              <Col xs={6}>
                <h2 style={{ paddingLeft: "1em" }}>All Notes</h2>
                <ScrollArea
                  style={{ height: "88.5vh", border: "1px solid lightgray" }}
                  verticalScrollbarStyle={{ display: "none" }}
                >
                  <NoteList notes={notes} />
                </ScrollArea>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}
