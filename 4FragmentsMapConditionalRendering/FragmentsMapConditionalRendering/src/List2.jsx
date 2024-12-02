import "bootstrap/dist/css/bootstrap.min.css";

function List2(){
  let foodItems = ["Dal","Rice","Chicken","Fish","Egg"];
  // let foodItems = [];

  return <>
  <h1>Healthy Foods: Conditional Rendering</h1>
  {/* {foodItems.length===0?<h3>I am still hungry!!</h3>:null} */}
  {foodItems.length===0 && <h3>I am still hungry!!</h3>}
  <ul className="list-group">
  {foodItems.map((foodItem) => (<li key={foodItem} className="list-group-item">
    {foodItem}</li>
    ))}
</ul>
  </>
}
export default List2;