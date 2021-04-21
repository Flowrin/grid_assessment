import './ItemList.css';
import ItemCard from './ItemCard';

const ItemList = (props) => {
  const items = props.items.map((item, i) => {
    return <ItemCard item={item} key={i} home={true} />;
  });

  return items.length === 0 ? (
    <h1>No results found</h1>
  ) : (
    <div className="item-list">{items}</div>
  );
};
export default ItemList;
