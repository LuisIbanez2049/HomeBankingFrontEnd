import React from "react";
import "./Header.css";
function Header(props) {
  return (
    <header>
      <div>
        <div>{props.children}</div>
      </div>
    </header>
  );
}

export default Header;
