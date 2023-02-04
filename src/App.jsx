// import './App.css';

// import Cleave from 'cleave.js/react';
// import { useState } from 'react';


// function App() {

//   const [name, setName] = useState("")
//   const [number, setNumber] = useState("")
//   const [exp, setExp] = useState({mm: '', yy: ''})
//   const [cvc, setCvc] = useState("")

//   const handleNameChange = e => {
//     setName(e.target.value)
//   }
//   const handleNumChange = e => {
//     setNumber(e.target.value)
//   }
//   const handleExpChange = e => {
//     setExp(exp => ({...exp, [e.target.name]: e.target.value}))
//   }
//   const handleCvcChange = e => {
//     setCvc(e.target.value)
//   }

//   return (
//     <div className="App">

//       <ul className="details">
//         <li>{name}</li>
//         {/* Format the card number to "0000 0000 0000 0000" */}
//         <li>{number}</li>
//         <li>{exp.mm}/{exp.yy}</li>
//         <li>{cvc}</li>
//       </ul>

//       <form>
//         <input type="text" name='name' value={name} onChange={e => handleNameChange(e)} placeholder="e.g. Jane Appleseed"/>
//         {/* <input type="tel" name='number' value={cardDetails.number} onChange={e => handleChange(e)} placeholder="e.g. 1234 5678 9123 0000"/> */}
//         <Cleave value={number} onChange={e => handleNumChange(e)} placeholder="e.g. 1234 5678 9123 0000" options={{creditCard: true, creditCardType: 'visa'}}/>
//         <input type="tel" name='mm' value={exp.mm} onChange={handleExpChange} placeholder="MM"/>
//         <input type="tel" name='yy' value={exp.yy} onChange={handleExpChange} placeholder="YY"/>
//         <input type="tel" name='cvc' value={cvc} onChange={e => handleCvcChange(e)} placeholder="e.g. 123"/>
//       </form>


// {/* 0000 0000 0000 0000
//   Jane Appleseed
//   00/00

//   000

//   Cardholder Name
//   e.g. Jane Appleseed

//   Card Number
//   e.g. 1234 5678 9123 0000

//   Exp. Date (MM/YY)
//   MM
//   YY

//   CVC
//   e.g. 123

//   Confirm */}
 

//   {/* <!-- Completed state start --> */}

//   {/* Thank you!
//   We've added your card details
//   Continue */}
//   <div className="attribution">
//     Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
//     Coded by <a href="thomaslawlor.com">Thomas Lawlor</a>.
//   </div>
//     </div>
//   );
// }

// export default App;

import './App.css';

import Cleave from 'cleave.js/react';
import { useState } from 'react';


function App() {

  const [cardDetails, setCardDetails] = useState({name: "", number: "", expMM: '', expYY: '', cvc: ""})

  const handleChange = (e) => {
      setCardDetails(cardDetails => ({...cardDetails, [e.target.name]: e.target.value}))
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(cardDetails)
  }

  return (
    <div className="App">

      <ul className="details">
        <li>{cardDetails.name}</li>
        {/* Format the card number to "0000 0000 0000 0000" */}
        <li>{cardDetails.number}</li>
        <li>{cardDetails.expMM}/{cardDetails.expYY}</li>
        <li>{cardDetails.cvc}</li>
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={cardDetails.name} onChange={e => handleChange(e)} placeholder="e.g. Jane Appleseed"/>
        <Cleave name="number" value={cardDetails.number} onChange={e => handleChange(e)} placeholder="e.g. 1234 5678 9123 0000" options={{creditCard: true, creditCardType: 'Visa'}} minLength={16}/>
        <input type="tel" name='expMM' value={cardDetails.expMM} onChange={e => handleChange(e)} placeholder="MM" maxLength={2} minLength={2}/>
        <input type="tel" name='expYY' value={cardDetails.expYY} onChange={e => handleChange(e)} placeholder="YY" maxLength={2} minLength={2}/>
        <input type="tel" name='cvc' value={cardDetails.cvc} onChange={e => handleChange(e)} placeholder="e.g. 123" minLength={3} maxLength={3}/>
        <button>Submit</button>
      </form>


{/* 0000 0000 0000 0000
  Jane Appleseed
  00/00

  000

  Cardholder Name
  e.g. Jane Appleseed

  Card Number
  e.g. 1234 5678 9123 0000

  Exp. Date (MM/YY)
  MM
  YY

  CVC
  e.g. 123

  Confirm */}
 

  {/* <!-- Completed state start --> */}

  {/* Thank you!
  We've added your card details
  Continue */}
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="thomaslawlor.com">Thomas Lawlor</a>.
  </div>
    </div>
  );
}

export default App;
