import React from "react";

function Footer(props) {
  return (
    <div>
      Contact {props.salesRep.FirstName} {props.salesRep.LastName} from{" "}
      {props.salesRep.CompanyName} for more info
      <br />
      {props.salesRep.EmailAddress} | {props.salesRep.Phone}
      <br />
      {props.salesRep.City}, {props.salesRep.State} {props.salesRep.PostalCode}
    </div>
  );
}

export default Footer;
