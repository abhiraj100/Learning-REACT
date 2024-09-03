import React from "react"; 
import ReactDOM from 'react-dom/client';

// // // React.createElement => ReactElement- JS Object => HTMLElement(render)

// // const heading = React.createElement('h1', {id: "heading"}, "Namaste React ✈");

// // console.log(heading);

// //JSX - HTML-like or XML-like syntax
// //JSX (transpiled before it reaches the  JS) - PARCEL - Babel
// // JSX - Babel transpile/Converted it into React.createElement => ReactElement- JS Object => HTMLElement(render)
// const jsxHeading = <h1 className="heading" tabIndex="1">Namaste React using JSX ✈</h1>;    
// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// root.render(jsxHeading);


// React Element
const heading = (<h1 className="heading" tabIndex="5">
                    Namaste React using JSX heading ✈
                    </h1>
                );   
                
// Convert the above React Element into React Functional Component                
const Heading = () => (
        <h1 className="heading" tabIndex="5">Namaste React using JSX ✈</h1>
        ); 
        
        
const Title = () => (
        <h1 className="heading" tabIndex="5">Namaste React using JSX ✈</h1>
        );    

const Title2 = function () {
return (
    <h1 className="heading" tabIndex="5">Namaste React using JSX ✈</h1>
    );
}     

// React Component
// 1. Class Based Components - (old way of writting code) -
// 2. Functional Components - (new way of writting code) - it is a normal js function

// React Functional Component : JS function which returns a React Element
//  a normal js function that returns some piece of JSX code or that returns a React Element.


const fn1 = () => { return true; }

const fn2 = () => {
    return true;
}

const fn3 = () => true

// all three fn1, fn2 & fn3 are same all three returning true.

// const HeadingComponent = () => {
//     return <h1>Namaste React Functional Component</h1>;
// }

// const HeadingComponent = () => <h1>Namaste React Functional Component</h1>;
// const HeadingComponent = () => (<h1 className="heading">
//             Namaste React Functional Component
//             </h1>
//             );

// Component Composition : Component inside component--> composing two components into one another

const number = 10000;

const HeadingComponent = () => (
    <div id="container">
    <Title />
    {heading}
    {number}
    <h2>{number}</h2>
    {100+200}
    <h1 className="heading">Namaste React Functional Component</h1>
    </div>
    );



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


// Rendering the component
root.render(<HeadingComponent />);
