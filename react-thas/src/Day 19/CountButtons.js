import React from "react";

class CountButton extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return React.createElement(
      "button",
      {
        onClick: () => {
          let ncount = this.state.count + 1;
          this.setState({ count: ncount });
        },
        style: {
          width: "20px",
        },
      },
      this.state.count
    );
  }
}

class Box extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "p",
        {},
        "There are 4 counter component instances that each manage their own state."
      ),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "center",
            padding: "10px",
          },
        },
        [...Array(4).keys()].map(() => <CountButton />)
      ),
    ]);
  }
}

export default Box;
