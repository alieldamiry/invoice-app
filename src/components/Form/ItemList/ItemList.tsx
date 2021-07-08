import classes from "./ItemList.module.scss";
import Input from "../Input";
import deleteIcon from "../../../assets/icons/icon-delete.svg";

interface ItemListProps {
  quantity: number;
  price: number;
}
const ItemList: React.FC<ItemListProps> = ({ quantity, price }) => {
  return (
    <div className={classes.Wrapper}>
      <Input label="Item Name" id="itemName" type="text" />
      <Input label="QTY" id="qty" type="number" />
      <Input label="Price" id="price" type="number" />
      <Input label="Total" id="total" type="number" />
      <div>
        <button type="button" className={classes.DeleteBtn}>
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ItemList;
