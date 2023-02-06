import React from 'react'
import styled from 'styled-components'
import Cleave from 'cleave.js/react';

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
      color: #ceced0;
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

export default function Form({handleSubmit, handleChange, cardDetails, errors}) {
  return (
    <StyledForm onSubmit={handleSubmit}>
    <label htmlFor="name">Cardholder Name</label>
    <div className="border"></div>
    <input className={errors.name && !cardDetails.name ? 'error' : null} type="text" name='name' id='name' value={cardDetails.name} onChange={e => handleChange(e)} placeholder="e.g. Jane Appleseed"/>
    <p className="error-txt">{errors.name && !cardDetails.name ? errors.name : null}</p>
    {/* Cleave allows for easier formatting in the credit card method, it includes a creditCard: true option however it detects the card based on the first few numbers and will change the formatting of the number given depending on this i.e. it can be 0000 0000 0000 0000 or 0000 000000 000000*/}
    <label htmlFor="number">Card Number</label>
    <Cleave className={errors.number && (cardDetails.number.length !== 19 || !/^(?:[0-9 ]+$)/.test(cardDetails.number)) ? 'error' : null} name="number" id='number' value={cardDetails.number} onChange={e => handleChange(e)} placeholder="e.g. 1234 5678 9123 0000" options={{blocks: [4, 4, 4, 4], delimiter: " ", numericOnly: true}} minLength={16}/>
    <p className="error-txt">{errors.number && (cardDetails.number.length !== 19 || !/^(?:[0-9 ]+$)/.test(cardDetails.number)) ? errors.number : null}</p>
    <div className="exp-cvc">
      <div className="exp">
        <label htmlFor="expMM">Exp. Date (MM/YY)</label>
        <div>
          <Cleave className={errors.expMM && (cardDetails.expMM.length !== 2 || !/^\d+$/.test(cardDetails.expMM)) ? 'error' : null} name='expMM' id='expMM' value={cardDetails.expMM} onChange={e => handleChange(e)} placeholder="MM" maxLength={2} options={{numericOnly: true}}/>
          <Cleave className={errors.expYY && (cardDetails.expYY.length !== 2 || !/^\d+$/.test(cardDetails.expYY)) ? 'error' : null} name='expYY' id='expYY' value={cardDetails.expYY} onChange={e => handleChange(e)} placeholder="YY" maxLength={2} options={{numericOnly: true}}/>
        </div>
          <p className="error-txt">{((errors.expMM || errors.expYY) && errors.expMM ) && (cardDetails.expMM.length !== 2 || !/^\d+$/.test(cardDetails.expMM) || cardDetails.expYY.length !== 2 || !/^\d+$/.test(cardDetails.expYY)) ? errors.expMM : ((errors.expMM || errors.expYY) && !errors.expMM) && (cardDetails.expMM.length !== 2 || !/^\d+$/.test(cardDetails.expMM) || (cardDetails.expYY.length !== 2 || !/^\d+$/.test(cardDetails.expYY))) ? errors.expYY : null }</p>
      </div>
      <div className="cvc">
        <label htmlFor="cvc">CVC</label>
        <Cleave className={errors.cvc && (cardDetails.cvc.length !== 3 || !/^\d+$/.test(cardDetails.cvc)) ? 'error' : null} name='cvc' id='cvc' value={cardDetails.cvc} onChange={e => handleChange(e)} placeholder="e.g. 123" maxLength={3} options={{numericOnly: true}}/>
        <p className="error-txt">{errors.cvc && (cardDetails.cvc.length !== 3 || !/^\d+$/.test(cardDetails.cvc)) ? errors.cvc : null}</p>
      </div>
    </div>
    <button className='sbmt'>Confirm</button>
  </StyledForm>
  )
}
