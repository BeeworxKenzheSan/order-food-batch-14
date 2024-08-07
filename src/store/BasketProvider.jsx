import { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  // корзинанын ичиндеги биздин тамактар
  const [items, setItems] = useState([]);
  // тамамк кошуу
  const onAddFood = (tamak) => {
    const existingTamak = items.find((food) => food.id === tamak.id);
    if (existingTamak === undefined) {
      setItems((prevState) => [...prevState, tamak]);
    } else {
      const updatedItems = items.map((food) => {
        if (food.id === tamak.id) {
          return { ...food, amount: +food.amount + +tamak.amount };
        }
        return food;
      });
      setItems(updatedItems);
    }
  };

  const onRemoveFood = (id) => {
    const existingTamak = items.findIndex((food) => food.id === id);
    if (existingTamak !== -1) {
      items[existingTamak].amount = items[existingTamak].amount - 1;
      if (items[existingTamak].amount === 0) {
        const updatedFood = items.splice(existingTamak, 1);
        setItems(updatedFood);
      }
      const updatedTamak = items.splice(existingTamak, 1, items[existingTamak]);
      setItems(updatedTamak);
    }
  };

  const initialValue = {
    items: items,
    onAddFood: onAddFood,
    onRemoveFood: onRemoveFood,
  };

  return (
    <BasketContext.Provider value={initialValue}>
      {children}
    </BasketContext.Provider>
  );
};
