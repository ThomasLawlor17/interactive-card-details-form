import './App.css';

import Cleave from 'cleave.js/react';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';



const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
max-width: 24rem;
padding: 1rem;

  label {
    text-transform: uppercase;
    margin-bottom: 16px;
    gap: 14px;
    display: flex;
    color: var(--very-dark-violet);
    font-size: 15px;
  }
  input {
    border: var(--light-grayish-violet) 1px solid;

    &:focus-visible {
      outline: none;
      border: 1px solid;
      border-image-source: var(--gradient-border);
    }
  }


  .exp-cvc {
    display: flex;
  }
  .exp div {
    display: flex;
  }
  .error {
    border: var(--red) 1px solid;
  }
  .error-txt {
    color: var(--red);
  }


`


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
        setErrors(errors => ({...errors, expMM: "Can't be blank"}))
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
        setErrors(errors => ({...errors, expYY: "Can't be blank"}))
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
        setErrors(errors => ({...errors, cvc: "Can't be blank"}))
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
    }
  }

  const handleReset = () => {
    setCardDetails({name: '', number: "", expMM: "", expYY: "", cvc: ""})
    setSubmitted(false)
  }

  return (
    <main className="App">

      <ul className="details">
        <li>{cardDetails.name ? cardDetails.name : "Jane Appleseed"}</li>
        <li>{cardDetails.number ? cardDetails.number : '0000 0000 0000 0000'}</li>
        <li>{cardDetails.expMM ? cardDetails.expMM : '00'}/{cardDetails.expYY ? cardDetails.expYY : "00"}</li>
        <li>{cardDetails.cvc ? cardDetails.cvc : "000"}</li>
      </ul>

      {submitted ? 
      <div className="submitted">
        <img src="" alt="" />
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button onClick={handleReset}>Continue</button>
      </div>
      :
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Cardholder Name</label>
        <input className={errors.name ? 'error name' : "name"} type="text" name='name' id='name' value={cardDetails.name} onChange={e => handleChange(e)} placeholder="e.g. Jane Appleseed"/>
        <p className="error-txt">{errors.name ? errors.name : null}</p>
        {/* Cleave allows for easier formatting in the credit card method, it includes a creditCard: true option however it detects the card based on the first few numbers and will change the formatting of the number given depending on this i.e. it can be 0000 0000 0000 0000 or 0000 000000 000000*/}
        <label htmlFor="number">Card Number</label>
        <Cleave className={errors.number ? 'error number' : "number"} name="number" id='number' value={cardDetails.number} onChange={e => handleChange(e)} placeholder="e.g. 1234 5678 9123 0000" options={{blocks: [4, 4, 4, 4], delimiter: " ", numericOnly: true}} minLength={16}/>
        <p className="error-txt">{errors.number ? errors.number : null}</p>
        <div className="exp-cvc">
          <div className="exp">
            <label htmlFor="expMM">Exp. Date (MM/YY)</label>
            <div>
              <Cleave className={errors.expMM ? 'error expMM' : "expMM"} name='expMM' id='expMM' value={cardDetails.expMM} onChange={e => handleChange(e)} placeholder="MM" maxLength={2} options={{numericOnly: true}}/>
              <Cleave className={errors.expYY ? 'error expYY' : "expYY"} name='expYY' id='expYY' value={cardDetails.expYY} onChange={e => handleChange(e)} placeholder="YY" maxLength={2} options={{numericOnly: true}}/>
            </div>
              <p className="error-txt">{(errors.expMM || errors.expYY) && errors.expMM ? errors.expMM : (errors.expMM || errors.expYY) && !errors.expMM ? errors.expYY : null }</p>
          </div>
          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <Cleave className={errors.cvc ? 'error cvc' : "cvc"} name='cvc' id='cvc' value={cardDetails.cvc} onChange={e => handleChange(e)} placeholder="e.g. 123" maxLength={3} options={{numericOnly: true}}/>
            <p className="error-txt">{errors.cvc ? errors.cvc : null}</p>
          </div>
        </div>
        <button>Confirm</button>
      </StyledForm>
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
    </main>
  );
}

export default App;
