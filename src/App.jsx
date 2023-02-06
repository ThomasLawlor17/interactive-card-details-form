import './App.css';

import Cleave from 'cleave.js/react';
import { useState } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
max-width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
gap: 130px;

button {
  background: var(--very-dark-violet);
  border: none;
  padding: 15px 20px;
  color: var(--white);
  cursor: pointer;
  border-radius: 6px;
  font-size: 18px;
  width: 100%;

  &:hover {
    opacity: 0.85;
  }
}

@media (max-width: 1270px) {
  gap: 104px;
}
@media (max-width: 1120px) {
  gap: 78px;
}
@media (max-width: 1000px) {
  gap: 0;
}



@media (max-width: 769px) {
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}

`

const StyledDiv = styled.div`
color: var(--white);
display: flex;
flex-direction: column;
align-items: center;
gap: 32px;

.card-img {
  width: calc(450px - 64px);
  height: calc(249px - 64px);
	border-radius: 10px;
	background-size: cover;
	color: var(--White);
	position: relative;
	padding: 32px;
}
.card-front {
  background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
  margin-right: 48px;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    word-spacing: 6px;

    span {
      font-size: 16px;
      letter-spacing: 2px;

      &:first-child {
        text-transform: uppercase;
      }
    }
  }

  > span {
    font-size: clamp(22px, 2.5vw, 27px);
    letter-spacing: 4px;
    margin-bottom: 25px;
    text-align: start;
  }

  .card-logo {
    position: absolute;
    top: 27px;
    left: 27px;
  }
}
.card-back {
  background-size: contain;
	background-size: 100% 100%;
	background-repeat: no-repeat;
  margin-left: 48px;

  span {
    position: absolute;
    right: 60px;
    top: 109px;
    font-size: 24px;
  }
}
@media (max-width: 1275px) {
  scale: 0.8;
}
@media (max-width: 1120px) {
  scale: 0.6;
}
@media (max-width: 769px) {
  scale: 1;
  flex-direction: column-reverse;
  gap: 0;

  .card-img {
    margin: 0;
    width: calc(288px - 36px);
    height: calc(157px - 36px);
    padding: 18px;
  }
  .card-front {
    bottom: 26px;
    margin-right: 46px;

    div {
      word-spacing: 4px;
      
      span {
        font-size: 11px;
      }
    }
    > span {
      font-size: 16px;
      letter-spacing: 3px;
      margin-bottom: 20px;
    }
    .card-logo {
      top: 18px;
      left: 20px;

      ellipse, path {
        scale: 0.65;
      }
    }
  }

  .card-back {
    top: 33px;
    margin-left: 46px;
    z-index: -1;

    span {
      right: 39px;
      top: 69px;
      font-size: 14px;
    }
  }
}
`



const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
max-width: 24rem;

  label {
    text-transform: uppercase;
    gap: 14px;
    color: var(--very-dark-violet);
    font-size: 12px;
    letter-spacing: 2px;
  }
  input {
    border: var(--light-grayish-violet) 1px solid;
    border-radius: 7px;
    width: calc(100% - 30px);
    padding: 13px;
    font-family: "Space Grotesk", sans-serif;
    color: var(--very-dark-violet);
    font-weight: 500;
    font-size: 18px;
    margin-top: 6px;
    transition: all 0.3s ease-in-out;
    
    &:focus-visible {
      outline: none;
      border: hsl(249, 99%, 64%) 1px solid;
    }

    &::placeholder {
      opacity: 0.7;
    }
  }


  .exp-cvc {
    display: flex;
    text-align: start;

    .exp {
      padding-right: 26px;

      div {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
  }
  .error {
    border: var(--red) 1px solid;
    animation: shake 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    // animation-iteration-count: 1;
  }
  .error-txt {
    color: var(--red);
    font-size: 10px;
    height: 13px;
    margin: 10px 0 20px 0;
  }


  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
      background: var(--Red);
    }
  
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  @media (max-width: 1275px) {
    scale: 0.8;
  }
  @media (max-width: 1120px) {
    scale: 0.6;
  }
  @media (max-width: 769px) {
    scale: 1;
    max-width: 330px;
    margin-top: 24px;

    input {
      padding: 10px;
      width: calc(100% - 22px;)
    }
  }
`

const StyledSubmittedDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: var(--very-dark-violet);

h1 {
  margin: 44px 0 30px 0;
  font-size: 30px;
  letter-spacing: 3px;
}
p {
  color: var(--dark-grayish-violet);
  margin: 0 0 55px 0;
}
button {
  width: 337px;
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
    setErrors({name: "", number: "", expMM: "", expYY: "", cvc: ""})
    setSubmitted(false)
  }

  return (
    <StyledMain className="App">
      <StyledDiv className="cards">
        <div className="card-front card-img">
        <svg className='card-logo' fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
          <span className='display number'>{cardDetails.number ? cardDetails.number : '0000 0000 0000 0000'}</span>
          <div>
            <span className='display name'>{cardDetails.name ? cardDetails.name : "Jane Appleseed"}</span>
            <span className='display exp'>{cardDetails.expMM ? cardDetails.expMM : '00'}/{cardDetails.expYY ? cardDetails.expYY : "00"}</span>
          </div>
        </div>
        <div className="card-back card-img">
          <span className='display cvc'>{cardDetails.cvc ? cardDetails.cvc : "000"}</span>
        </div>
      </StyledDiv>

      {submitted ? 
      <StyledSubmittedDiv className="submitted">
        <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button className='sbmt' onClick={handleReset}>Continue</button>
      </StyledSubmittedDiv>
      :
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Cardholder Name</label>
        <div className="border"></div>
        <input className={errors.name && !cardDetails.name ? 'error' : null} type="text" name='name' id='name' value={cardDetails.name} onChange={e => handleChange(e)} placeholder="e.g. Jane Appleseed"/>
        <p className="error-txt">{errors.name && !cardDetails.name ? errors.name : null}</p>
        {/* Cleave allows for easier formatting in the credit card method, it includes a creditCard: true option however it detects the card based on the first few numbers and will change the formatting of the number given depending on this i.e. it can be 0000 0000 0000 0000 or 0000 000000 000000*/}
        <label htmlFor="number">Card Number</label>
        <Cleave className={errors.number && (cardDetails.number.length !== 19 || !/^(?:[0-9 ]+$)/.test(cardDetails.number)) ? 'error' : null} name="number" id='number' value={cardDetails.number} onChange={e => handleChange(e)} placeholder="e.g. 1234 5678 9123 0000" options={{blocks: [4, 4, 4, 4], delimiter: " ", numericOnly: true}} minLength={16}/>
        <p className="error-txt">{errors.number && cardDetails.number.length !== 19 || !/^(?:[0-9 ]+$)/.test(cardDetails.number) ? errors.number : null}</p>
        <div className="exp-cvc">
          <div className="exp">
            <label htmlFor="expMM">Exp. Date (MM/YY)</label>
            <div>
              <Cleave className={errors.expMM && (cardDetails.expMM.length !== 2 || !/^\d+$/.test(cardDetails.expMM)) ? 'error' : null} name='expMM' id='expMM' value={cardDetails.expMM} onChange={e => handleChange(e)} placeholder="MM" maxLength={2} options={{numericOnly: true}}/>
              <Cleave className={errors.expYY && (cardDetails.expYY.length !== 2 || !/^\d+$/.test(cardDetails.expYY)) ? 'error' : null} name='expYY' id='expYY' value={cardDetails.expYY} onChange={e => handleChange(e)} placeholder="YY" maxLength={2} options={{numericOnly: true}}/>
            </div>
              <p className="error-txt">{((errors.expMM || errors.expYY) && errors.expMM ) && (cardDetails.expMM.length !== 2 || !/^\d+$/.test(cardDetails.expMM) || cardDetails.expYY.length !== 2 || !/^\d+$/.test(cardDetails.expYY)) ? errors.expMM : ((errors.expMM || errors.expYY) && !errors.expMM) && cardDetails.expMM.length !== 2 || !/^\d+$/.test(cardDetails.expMM) || (cardDetails.expYY.length !== 2 || !/^\d+$/.test(cardDetails.expYY)) ? errors.expYY : null }</p>
          </div>
          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <Cleave className={errors.cvc && (cardDetails.cvc.length !== 3 || !/^\d+$/.test(cardDetails.cvc)) ? 'error' : null} name='cvc' id='cvc' value={cardDetails.cvc} onChange={e => handleChange(e)} placeholder="e.g. 123" maxLength={3} options={{numericOnly: true}}/>
            <p className="error-txt">{errors.cvc && (cardDetails.cvc.length !== 3 || !/^\d+$/.test(cardDetails.cvc)) ? errors.cvc : null}</p>
          </div>
        </div>
        <button className='sbmt'>Confirm</button>
      </StyledForm>
      }
    </StyledMain>
  );
}

export default App;
