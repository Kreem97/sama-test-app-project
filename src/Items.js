//dependencies
import React from "react";
import ItemCard from "./ItemCard";

//data
import testData from "../res/test";

function Items(props) {
  const itemCards = testData.items.map(item => (
    <ItemCard key={item.ItemID} item={item} />
  ));
  return (
    <div>
      <h2>Items</h2>
      <div>{itemCards}</div>
    </div>
  );
}

export default Items;
