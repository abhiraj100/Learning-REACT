const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id: "child1"},
            [
                React.createElement("h1", {id: "head1"}, "I'm a h1 tag"),
                React.createElement("h2", {id:"head2"}, "I'm a h2 tag")
            ]
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement("h1", {id: "head1"}, "I'm a h1 tag"),
                React.createElement("h2", {id:"head2"}, "I'm a h2 tag")
            ]
        )
    ]
);


console.log(parent);  // it gives an object 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
