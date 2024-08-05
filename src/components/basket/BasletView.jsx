import styled from "styled-components";
import BasketItem from "./BasketItem";
import { Button } from "../UI/Button";
import { items } from "../../helpers/constants";
import TotalAmount from "./TotalAmout";
import Modal from "../UI/Modal";

const BasketView = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <MealContainer>
        {items && items.length > 0
          ? items.map((item) => <BasketItem key={item.id} {...item} />)
          : null}
      </MealContainer>
      <TotalAmount totalAmount={130} />
      <ButtonsContainer>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary">Order</Button>
      </ButtonsContainer>
    </Modal>
  );
};

export default BasketView;

const MealContainer = styled("div")`
  max-height: 250px;
  overflow: hidden;
  overflow-y: auto;
`;

const ButtonsContainer = styled("div")`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;
