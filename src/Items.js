import React from "react";
import ItemCard from "./ItemCard";

function Items(props) {
  const itemCards = props.itemsList.map(item => <ItemCard item={item} />);
  return (
    <div>
      <h2>Items</h2>
      <div>{itemCards}</div>
    </div>
  );
}

export default Items;
