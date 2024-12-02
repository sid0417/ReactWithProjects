import style from "./Item.module.css"

const Item = ({foodItem})=>{
return(
 <li className={`${style["sr_list"]} list-group-item`}>
  <span className={style["sr_span"]}>{foodItem}</span>
  </li>
);
};
export default Item;
