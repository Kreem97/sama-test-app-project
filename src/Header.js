import React from "react";
import Image from "react-image-resizer";

function Header(props) {
  return (
    <div>
      <Image
        src={require("../res/SAMA_Logo.png")}
        alt="Logo"
        width={240}
        height={80}
      />
      <h1>{props.comName}</h1>
    </div>
  );
}

export default Header;
