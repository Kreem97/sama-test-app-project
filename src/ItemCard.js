import React from "react";
import { Link } from "react-router-dom";
import Image from "react-image-resizer";

function Items(props) {
  return (
    <Link to={`/item/${props.item.ItemID}`}>
      <Image
        src={props.item.PhotoName}
        alt="Item Image"
        width={50}
        height={50}
      />
      <h3>{props.item.ItemName}</h3>
      <h4>{props.item.Dimensions}</h4>
      <h5>${props.item.BasePrice}</h5>
    </Link>
  );
}

export default Items;
