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
    <div className="items">
      {itemCards}
    </div>
  );
}

export default Items;
