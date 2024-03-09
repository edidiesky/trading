import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";

export default function Top({ onsidebar, setOnSidebar, type }: { onsidebar: boolean, setOnSidebar: (value: any) => void, type?: string }) {
  return (
    <TopIndexWrapper>
      <div className="w-85 auto flex item-center justify-space">
        <h4 className="text-dark fs-16 family1 text-light">
          Conversation with Oleksandr Kocherhin
        </h4>
      </div>
    </TopIndexWrapper>
  );
}

const TopIndexWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
  min-height: 6rem;

  z-index: 100;
`;
