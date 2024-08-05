import { Header } from "./components/header/Header";
import Summary from "./components/summary/Summary";
import Meals from "./components/meals/Meals";

const meals = [
  {
    id: "f101",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "f19",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: "f5",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 12.99,
  },
  {
    id: "f3",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

function App() {
  return (
    <>
      <Header />
      <Summary />
      <Meals meals={meals} />
    </>
  );
}

export default App;
