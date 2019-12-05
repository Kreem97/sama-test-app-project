//dependencies
import React from "react";
import Image from "react-image-resizer";

//data
import testData from "../res/test";

function Item(props) {
  const item = testData.items.find(
    item => item.ItemID === props.match.params.id
  );
  return (
    <div>
      <Image src={item.PhotoName} alt="Item Image" width={100} height={100} />
      <div>
        ${item.BasePrice}
        <br />
        {item.ItemName}
        <br />
        Item ID: {item.ItemID}
      </div>
      <p>
        {item.Dimensions}
        <br />
        {item.Description}
      </p>
    </div>
  );
}

export default Item;
