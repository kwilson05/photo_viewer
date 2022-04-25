import React from "react";
import styled, { css } from "styled-components";

const layout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const MetaDetails = styled.p`
  font-size: 16px;
`;

const HomeHeader = ({ className, children }) => (
  <div className={className}>
    <Content>
      <Title>Kasozi Wilson</Title>
      <MetaDetails>Durham, North Carolina</MetaDetails>
      <MetaDetails>
        Software Engineer, Runner, Swimmer, and hobbyist photographer
      </MetaDetails>
    </Content>
  </div>
);

export default styled(HomeHeader)`
  ${layout}
`;
