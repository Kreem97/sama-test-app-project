//dependencies
import React from "react";
import { Link } from "react-router-dom";
import Image from "react-image-resizer";

function Items(props) {
  return (
    <Link className="item-card" to={`/item/${props.item.ItemID}`}>
      <Image
        src={props.item.PhotoName}
        alt="Item Image"
        width={300}
        height={300}
      />
      <p>{props.item.ItemName}</p>
      <h3>${props.item.BasePrice}</h3>
    </Link>
  );
}

export default Items;
