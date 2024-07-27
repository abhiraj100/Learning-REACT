// const heading = React.createElement("h1", {}, "Hello World from React!");
const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");

// console.log(heading);  // object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

// {}  --> This object is basically a place where you will give attributes to your tags, this object gives attributes to our class like id, class. 