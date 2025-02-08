const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I'm a H1 tag"),
    React.createElement("h2", { id: "h2" }, "I'm a H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "I'm a child2 H1 tag"),
    React.createElement("h2", { id: "h2" }, "I'm a child2 H2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
