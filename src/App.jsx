// import { useState } from 'react'
// import './App.css'

// const App = () => {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
// console.log("its working")

//   const addHandler = () => {
//     let storedNums = [...numbers];
//     storedNums.push(storedNums[storedNums.length - 1] + 1);
//     setNumbers(storedNums);
//   };

//   return (
//   <div>
//     <h1>Fundamentals. Common Situations</h1>
//     {numbers.map((number, index) => {
//       return <p key={index}> {number} </p>
//     })}
//     <button onClick={addHandler}>Click here to add a number</button>
//   </div>
//   )
//   }

// export default App;



//its fucked//
// import { useState } from 'react'
// import './App.css'

// const App = () => {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
//   console.log("its working")

//   const addHandler = (index) => {
//     let storedNums = [...numbers];
//     storedNums.push(storedNums[storedNums.length - 1] + 1);
//     setNumbers(storedNums);
//   };

//   const removeHandler = (index) => {
//     let storedNums = [...numbers];
//     storedNums.splice(index, 1);
//     setNumbers(storedNums);
//   }

//   return (
//   <div>
//     <h1>Fundamentals. Common Situations</h1>
//     {numbers.map((number, index) => {
//       return <p key={index}onClick={removeHandler(index)}> {number} </p>
//     })}
//     <button onClick={addHandler}>Click here to add a number</button>
//   </div>
//   )
//   }

// export default App;


// onChange example
 // JavaScript
// import { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [inputText, setInputText] = useState("");

//   const changeHandler = (event) => {
//     setInputText(event.target.value)
//   };

//   return (
//       <div>
//         <h1>Hello</h1>
//         <input type="text" onChange={changeHandler}></input>
//         <h3>{inputText}</h3>
//       </div>
//   )
// }

// export default App;


