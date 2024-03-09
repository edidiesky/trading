import React from "react";
import styled from "styled-components";
import InboxIndex from "./inbox";

export default function ChatIndex() {
  return (
    <ChatIndexWrapper className="w-100  auto">
      <div className="w-90 auto flex flex-col gap-12">
        <h2 className="">Message
        </h2>
        <InboxIndex />
      </div>
    </ChatIndexWrapper>
  );
}

const ChatIndexWrapper = styled.div`

`;
