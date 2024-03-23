const heading1 = React.createElement("h1", {
    id: "title"
}, "heading 1");
const heading2 = React.createElement("h2", {
    id: "title"
}, "heading 2");
const heading3 = React.createElement("h3", {
    id: "title"
}, "heading 3");
const heading4 = React.createElement("h4", {
    id: "title"
}, "heading 4");
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2,
    heading3,
    heading4
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
