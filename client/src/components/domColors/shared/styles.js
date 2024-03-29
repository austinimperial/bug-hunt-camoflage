import styled from "styled-components/macro";

export const StyledContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledSwatchContainer = styled.div`
  display: flex;
`;

export const StyledTitle = styled.p`
  margin: 0px;
  font-family: ${props => props.theme.secondaryFont}, sans-serif;
  font-size: 12px;
`;
