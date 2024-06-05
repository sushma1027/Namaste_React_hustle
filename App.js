/* <div id ="parent">
  <div id ="child1">
    <h1>i'm h1 tag</h1>
  </div>
  <div id ="child2">
    <h1>i'm h1 tag</h1>
  </div>
</div> */

const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"i'm h1 tag"),React.createElement("h2",{},"i'm h2 tag"),React.createElement("h3",{},"i'm h3 tag")])],[React.createElement("div",{id:"child2"},[React.createElement("h1",{},"i'm h1 tag"),React.createElement("h2",{},"i'm h2 tag"),React.createElement("h3",{},"i'm h3 tag")])],[React.createElement("div",{id:"child3"},[React.createElement("h1",{},"i'm h1 tag"),React.createElement("h2",{},"i'm h2 tag"),React.createElement("h3",{},"i'm h3 tag")])])

//jsx

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);











// const heading = React.createElement(
//   "h1",
//    {id:"heading"},
//     "hello React");  //object
// console.log(heading);

     