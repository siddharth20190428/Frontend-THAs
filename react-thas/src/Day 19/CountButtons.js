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
      },
      this.state.count
    );
  }
}

class Box extends React.Component {
  constructor() {
    super();
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "p",
        {},
        "There are 4 counter component instances that each manage their own state."
      ),
      [...Array(4).keys()].map(() => <CountButton />),
    ]);
  }
}

export default Box;
