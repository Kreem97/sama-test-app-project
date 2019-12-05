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
    <div className="item">
      <Image
        src={item.PhotoName}
        alt="Item Image"
        width={window.innerWidth > 500 ? 450 : 300}
        height={window.innerWidth > 500 ? 450 : 300}
      />
      <div className="item-info">
        <h3>
          {item.ItemName}
          <br />
          ${item.BasePrice}
        </h3>
        <hr />
        <p>
          Item ID: {item.ItemID}
          <br /><br />
          Dimensions: {item.Dimensions}
          <br /><br />
          {item.Description}
        </p>
      </div>
    </div>
  );
}

export default Item;
