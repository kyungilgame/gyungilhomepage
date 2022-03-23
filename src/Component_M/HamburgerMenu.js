import React from "react";
import { slide as Menu } from "react-burger-menu";

class HamburgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu
        styles={{
          bmBurgerButton: {
            position: "absolute",
            width: "7vw",
            height: "5vw",
            right: "5vw",
            top: "5vw",
          },
          bmBurgerBars: {
            background: "#f6f6f6",
          },
          bmMenuWrap: {
            position: "fixed",
            height: "100%",
            width: "100%",
            right: "0vw",
            top: "0vw",
          },
          bmMenu: {
            background: "rgba(0, 0, 0, 0.3)",
            padding: "2vw 2vw 0",
            fontSize: "5vw",
          },
          bmItemList: {
            color: "green",
            padding: "0.8em",
            position: "fixed",
            top: "5vw",
          },
          bmOverlay: {
            background: "rgba(0, 0, 0, 0.3)",
            height: "50%",
            width: "20%",
            marginLeft: "50%",
          },
        }}
      >
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    );
  }
}

export default HamburgerMenu;
