import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";

// const FoodItems = (props) => {
//   return (
//     <ul className="list-group">
//       {props.Items.map((item) => (
//         <Item foodItem={item} key={item}></Item>
//       ))}
//     </ul>
//   );
// };

//Yaha hamne distructure nhi kiya hai islie props.Items likhna pda but
const FoodItems = ({Items}) => {
  return (
    <ul className="list-group">
      {Items.map((item) => (
        <Item foodItem={item} key={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
//yaha kiya hai islie direct ho gya 