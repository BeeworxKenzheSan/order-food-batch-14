import styled from "styled-components";
import { PlusIcon } from "../../assets/icon-collection";
import { BASE_STYLES } from "../../helpers/constants";

export const Basket = ({ orders = 20 }) => {
  return (
    <Wrapper>
      <PlusIcon />
      <YourCard>Your Cart</YourCard>
      <Orders>{orders}</Orders>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${BASE_STYLES.BLACK_BROWN};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px 33px;
  border-radius: 30px;
  gap: 15px;
  text-align: center;
  color: white;
  font-weight: bold;
`;

const Orders = styled.div`
  background-color: ${BASE_STYLES.BROWN};
  width: 40px;
  padding: 5px 8px;
  border-radius: 30px;
`;
const YourCard = styled.p`
  font-size: 16px;
`;
