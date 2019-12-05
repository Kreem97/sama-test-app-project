//dependencies
import React from "react";
import { Link } from "react-router-dom";
import Image from "react-image-resizer";

function Header(props) {
  return (
    <div className="nav">
      <Link to={"/"}>
        <Image
          src={require("../res/SAMA_Logo.png")}
          alt="Logo"
          width={240}
          height={80}
        />
      </Link>
      <div className="contact-info">
        Contact {props.salesRep.FirstName} {props.salesRep.LastName} from{" "}
        {props.salesRep.CompanyName} for more info
        <br />
        {props.salesRep.EmailAddress} | {props.salesRep.Phone}
        <br />
        {props.salesRep.City}, {props.salesRep.State} {props.salesRep.PostalCode}
      </div>
      <h1>{props.comName}</h1>
    </div>
  );
}

export default Header;
