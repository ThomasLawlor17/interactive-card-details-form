import './App.css';

import Cleave from 'cleave.js';
import { useState } from 'react';


function App() {

  const [cardDetails, setCardDetails] = useState({name: "", number: undefined, expDate: {month: undefined, year: undefined}, cvc: undefined,})

  const handleChange = (e) => {
    setCardDetails((cardDetails) => ({...cardDetails, [e.target.name]: e.target.value}))
  }

  return (
    <div className="App">

      <ul className="details">
        <li>{cardDetails.name}</li>
        {/* Format the card number to "0000 0000 0000 0000" */}
        <li>{cardDetails.number}</li>
        <li>{cardDetails.expDate.month}/{cardDetails.expDate.year}</li>
        <li>{cardDetails.cvc}</li>
      </ul>

      <form>
        <input type="text" name='name' value={cardDetails.name} onChange={handleChange} placeholder="e.g. Jane Appleseed"/>
        <input type="tel" name='number' value={cardDetails.number} onChange={handleChange} placeholder="e.g. 1234 5678 9123 0000"/>
        <input type="tel" name='month' value={cardDetails.expDate.month} onChange={handleChange} placeholder="MM"/>
        <input type="tel" name='year' value={cardDetails.expDate.year} onChange={handleChange} placeholder="YY"/>
        <input type="tel" name='cvc' value={cardDetails.cvc} onChange={handleChange} placeholder="e.g. 123"/>
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
