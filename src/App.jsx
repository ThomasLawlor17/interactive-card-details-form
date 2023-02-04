import './App.css';

import Cleave from 'cleave.js/react';
import { useState } from 'react';


function App() {

  const [cardDetails, setCardDetails] = useState({name: "", number: "", expMM: '', expYY: '', cvc: ""})
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({name: false, number: false, expMM: false, expYY: false, cvc: false})

  const handleChange = (e) => {
      setCardDetails(cardDetails => ({...cardDetails, [e.target.name]: e.target.value}))
  }
  const handleSubmit = e => {
    e.preventDefault()

    // Double check all information is correct
    if (!cardDetails.name) {
      setErrors(errors => ({...errors, name: "Can't be blank"}))
    }
    if (cardDetails.number.length !== 19) {
      if (!cardDetails.number) {
        setErrors(errors => ({...errors, number: "Can't be blank"}))
      }
      else {
        if (!/^(?:[0-9 ]+$)/.test(cardDetails.number)) {
          setErrors(errors => ({...errors, number: "Wrong format, numbers only and incorrect length"}))
        }
        else {
          setErrors(errors => ({...errors, number: "Wrong length"}))
        }
      }
    }
    if (!/^(?:[0-9 ]+$)/.test(cardDetails.number) && cardDetails.number.length === 19) {
      setErrors(errors => ({...errors, number: "Wrong format, numbers only"}))
    }
    if (cardDetails.expMM.length !== 2) {
      if (!cardDetails.expMM) {
        setErrors(errors => ({...errors, expMM: "Can't be empty"}))
      }
      else {
        if (!/^\d+$/.test(cardDetails.expMM)) {
          setErrors(errors => ({...errors, expMM: "Wrong format, numbers only and incorrect length"}))
        }
        else {
          setErrors(errors => ({...errors, expMM: "Must be 2 numbers"}))
        }
      }
    }
    if (!/^\d+$/.test(cardDetails.expYY) && cardDetails.expYY.length === 2) {
      setErrors(errors => ({...errors, expYY: "Wrong format, numbers only"}))
    }
    if (cardDetails.expYY.length !== 2) {
      if (!cardDetails.expYY) {
        setErrors(errors => ({...errors, expYY: "Can't be empty"}))
      }
      else {
        if (!/^\d+$/.test(cardDetails.expYY)) {
          setErrors(errors => ({...errors, expYY: "Wrong format, numbers only and incorrect length"}))
        }
        else {
          setErrors(errors => ({...errors, expYY: "Must be 2 numbers"}))
        }
      }
    }
    if (!/^\d+$/.test(cardDetails.expYY) && cardDetails.expYY.length === 2) {
      setErrors(errors => ({...errors, expYY: "Wrong format, numbers only"}))
    }
    if (cardDetails.cvc.length !== 3) {
      if (!cardDetails.cvc) {
        setErrors(errors => ({...errors, cvc: "Can't be empty"}))
      }
      else {
        if (!/^\d+$/.test(cardDetails.cvc)) {
          setErrors(errors => ({...errors, cvc: "Wrong format, numbers only and incorrect length"}))
        }
        else {
          setErrors(errors => ({...errors, cvc: "Must be 3 numbers"}))
        }
      }
    }
    if (!/^\d+$/.test(cardDetails.cvc) && cardDetails.cvc.length === 3) {
      setErrors(errors => ({...errors, cvc: "Wrong format, numbers only"}))
    }
    if (cardDetails.name && cardDetails.number.length === 19 && /^(?:[0-9 ]+$)/.test(cardDetails.number) && cardDetails.expMM.length === 2 && /^\d+$/.test(cardDetails.expMM) && cardDetails.expYY.length === 2 && /^\d+$/.test(cardDetails.expYY) && cardDetails.cvc.length === 3 && /^\d+$/.test(cardDetails.cvc)) {
      setSubmitted(true)
      setCardDetails({name: '', number: "", expMM: "", expYY: "", cvc: ""})
    }
  }
  const handleReset = () => {
    setSubmitted(false)
  }

  return (
    <div className="App">

      <ul className="details">
        <li>{cardDetails.name}</li>
        <li>{cardDetails.number}</li>
        <li>{cardDetails.expMM}/{cardDetails.expYY}</li>
        <li>{cardDetails.cvc}</li>
      </ul>

      {submitted ? 
      <div className="submitted">
        <img src="" alt="" />
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button onClick={handleReset}>Continue</button>
      </div>
      :
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={cardDetails.name} onChange={e => handleChange(e)} placeholder="e.g. Jane Appleseed"/>
        {/* Cleave allows for easier formatting in the credit card method, it includes a creditCard: true option however it detects the card based on the first few numbers and will change the formatting of the number given depending on this i.e. it can be 0000 0000 0000 0000 or 0000 000000 000000*/}
        <Cleave name="number" value={cardDetails.number} onChange={e => handleChange(e)} placeholder="e.g. 1234 5678 9123 0000" options={{blocks: [4, 4, 4, 4], delimiter: " ", numericOnly: true}} minLength={16}/>
        <Cleave name='expMM' value={cardDetails.expMM} onChange={e => handleChange(e)} placeholder="MM" maxLength={2} options={{numericOnly: true}}/>
        <Cleave name='expYY' value={cardDetails.expYY} onChange={e => handleChange(e)} placeholder="YY" maxLength={2} options={{numericOnly: true}}/>
        <Cleave name='cvc' value={cardDetails.cvc} onChange={e => handleChange(e)} placeholder="e.g. 123" maxLength={3} options={{numericOnly: true}}/>
        <button>Submit</button>
      </form>
      }

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
