"use strict";

let e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }
  render() {
    return e(
      "button",
      {
        onClick: () => {
          let nclick = this.state.clicks + 1;
          this.setState({ clicks: nclick });
        },
      },
      `you clicked ${this.state.clicks} times`
    );
  }
}

ReactDOM.render(e(App), document.getElementById("root"));
