import styled from "styled-components";
import { BASE_STYLES } from "../../helpers/constants";
import { Basket } from "../basket/Basket";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Title>ReactMeals</Title>
        <Basket />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${BASE_STYLES.BROWN};
`;

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: white;
`;
