import React, { useState } from "react";
import styled from "styled-components";
import Left from "./Left";

export default function ConversationIndex() {
  const [onsidebar, setOnSidebar] = useState(true);
  return (
    <ConversationIndexWrapper>
      <div className="wrapper">
        <Left setOnSidebar={setOnSidebar} onsidebar={onsidebar} />
      </div>
    </ConversationIndexWrapper>
  );
}

const ConversationIndexWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: sticky;
  top: 0;
  overflow-y:auto;
  .wrapper {
    display: flex;
    height: 100%;
  }
`;
