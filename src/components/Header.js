import React from "react";

function Nav(props) {
  console.log(props);

  const navLinkArray = [
    {
      label: "About Me",
      to: "#",
    },
    { label: "portfolio", href: "#" },
    { label: "contact", href: "#" },
  ];

  return (
    <div className>
      <div>
        <nav className="nav-bar">
          <div>{props.type}</div>
          <ul>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
