import React, { useState } from "react";
import styled from "styled-components";
import ConversationIndex from "../conversation";
import InboxLeft from "./Left";

export default function InboxIndex() {
  return (
    <InboxIndexWrapper className="bg-[#fff]">

      <InboxLeft />
      <ConversationIndex />
    </InboxIndexWrapper>
  );
}

const InboxIndexWrapper = styled.div`
  width: 100%;
  border: 1px solid rgba(0,0,0,.2);
  height:65vh;
  display: flex;
  align-items: flex-start;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;
