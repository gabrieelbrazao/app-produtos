import styled from "styled-components";

export const Container = styled.div`
  padding: 48px 128px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content min-content min-content auto;

  @media only screen and (max-width: 720px) {
    padding: 32px 16px;
  }
`;

export const TitleProducts = styled.div`
  margin-bottom: 32px;
`;

export const TitleClientData = styled.div`
  margin: 32px 0;
`;
