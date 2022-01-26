import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 *  Here I declare my component as an arrow function
 */
const NavBar = props => {
  //I have to loop all the items and convert them into LIs
  const items = props.items.map(item => (
    <li class="nav-item">
      <a class="nav-link" href={item.url}>
        {item.label}
      </a>
    </li>
  ));

  //this methods says how the NavBar should look like in HTML
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        {/* here I pass the logo url to the navbar image */}
        <img src={props.logo} />
      </a>
      {/* here I pass the array of LIs into the UL */}
      <ul class="navbar-nav mr-auto">{items}</ul>
    </nav>
  );
};

// declare a JS array with the menu items that you want
let menu = [
  { label: "Services", url: "/home" },
  { label: "About Us", url: "/contact-us" },
  { label: "Contact", url: "/contact-us" },
];

/**
 * tell react to render the navbar into the <root> tag,
 * the <root> tag was declared inside the index.html body and that is
 * why I can actually make use of it.
 */
render(
  <NavBar
    items={menu}
    logo=""
  />,
  document.querySelector("Main")
);
