import Container from "./Component/Container";
import ErrorMessage from "./Component/ErrorMessage";
import FoodItems from "./Component/FoodItems";
import Title from "./Component/Title";

function App() {
  let foodItems = ["Dal", "Rice", "Chicken", "Fish", "Egg"];
  // let foodItems = [];
  let title = "Healthy Foods";

  return (
    <>
      <Container>  <Title value = {title}></Title>
      <ErrorMessage Items={foodItems}></ErrorMessage>
      <FoodItems Items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>Above are the list of healthy foods.</p>
      </Container>
    
    </>
  );
}

export default App;
