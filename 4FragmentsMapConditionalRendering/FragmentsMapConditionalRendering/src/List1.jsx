import "bootstrap/dist/css/bootstrap.min.css";

function List1(){
  let foodItems = ["Dal","Rice","Chicken","Fish","Egg"];

  return <>
  <h1>Healthy Foods</h1>
  <ul className="list-group">
  {foodItems.map((foodItem) => (<li key={foodItem} className="list-group-item">
    {foodItem}</li>
    ))}
</ul>
  </>
}
export default List1;