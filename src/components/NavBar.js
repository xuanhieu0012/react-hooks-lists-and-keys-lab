import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const ele = links.map(elements => {
    return (<a key={elements} href ={`#${elements}`}>{elements}</a>)
  })
  return <nav>{ele}</nav>;
}

export default NavBar;
