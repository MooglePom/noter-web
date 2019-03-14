import React from "react";
import NoteListItem from "./note_list_item";
import { List } from "antd";

export default ({ notes }) => (
  <div>
    <List
      size="large"
      style={{ backgroundColor: "white" }}
      bordered
      dataSource={notes}
      renderItem={note => <NoteListItem note={note} />}
    />
  </div>
);
