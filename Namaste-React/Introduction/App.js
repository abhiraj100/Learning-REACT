/**
 * Nested Tags
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm a h1 tag </h1>
 *  </div>
 * </div>
 * 
 *  Siblings tags
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm a h1 tag </h1>
 *      <h2>I'm a h2 tag </h2>
 *  </div>
 * </div>
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm a h1 tag </h1>
 *      <h2>I'm a h2 tag </h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I'm a h1 tag </h1>
 *      <h2>I'm a h2 tag </h2>
 *  </div>
 * </div>
 * 
 */

// Nested tags

// const parent = React.createElement(
//     "div", 
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement(
//             "h1",
//             {},
//             "I'm a h1 tag")
//         )
//     );


// Siblings tag

const parent = React.createElement(
    "div",
    {id:"parent"},
    [ React.createElement(
        "div",
        {id:"child"},
        [ 
            React.createElement("h1", {id: "head1"}, "I'm a h1 tag"),
            React.createElement("h2", {id: "head2"}, "I'm a h2 tag")
        ]
     ),
     React.createElement(
        "div",
        {id:"child2"},
        [ 
            React.createElement("h1", {id: "head1"}, "I'm a h1 tag"),
            React.createElement("h2", {id: "head2"}, "I'm a h2 tag")
        ]
     )
    ]
);


console.log(parent);  // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);





/*

// const heading = React.createElement("h1", {}, "Hello World from React!");
const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");

// console.log(heading);  // object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

// {}  --> This object is basically a place where you will give attributes to your tags, this object gives attributes to our class like id, class. 

*/

