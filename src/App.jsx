import './App.css';

import { useState } from 'react';
import styled from 'styled-components';
import Cards from './components/Cards';
import Submitted from './components/Submitted';
import Form from './components/Form';
import Footer from './components/Footer';

const StyledMain = styled.main`
max-width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
gap: 130px;

h1 {
  display: none;
}

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
}`


function App() {

  const [cardDetails, setCardDetails] = useState({name: "", number: "", expMM: '', expYY: '', cvc: ""})
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({name: false, number: false, expMM: false, expYY: false, cvc: false})


  const regex1 = /^(?:[0-9 ]+$)/
  const regex2 = /^\d+$/

  const checkNumber = (number) => {
    if (number.length !== 19) {
      if (!number) {
        setErrors(errors => ({...errors, number: "Can't be blank"}))
      }
      else {
        if (!regex1.test(number)) {
          setErrors(errors => ({...errors, number: "Wrong format, numbers only and incorrect length"}))
        }
        else {
          setErrors(errors => ({...errors, number: "Wrong length"}))
        }
      }
      return true
    }
    if (!regex1.test(cardDetails.number) && cardDetails.number.length === 19) {
      setErrors(errors => ({...errors, number: "Wrong format, numbers only"}))
      return true
    }
  }
  const checkExp = (mm, yy) => {
    let fail = false
    const check = (exp, x) => {
      if (exp.length !== 2) {
        if (!exp) {
          setErrors(errors => ({...errors, [x]: "Can't be blank"}))
        }
        else {
          if (!regex2.test(exp)) {
            setErrors(errors => ({...errors, [x]: "Wrong format, numbers only and incorrect length"}))
          }
          else {
            setErrors(errors => ({...errors, [x]: "Must be 2 numbers"}))
          }
        }
        fail = true
      }
      if (!regex2.test(exp) && exp.length === 2) {
        setErrors(errors => ({...errors, [x]: "Wrong format, numbers only"}))
        fail = true
      }
    }
    let exp = mm
    let x = "expMM"
    check(exp, x)
    exp = yy
    x = "expYY"
    check(exp, x)
    return fail
  }
  const checkCvc = (cvc) => {
    if (cvc.length !== 3) {
      if (!cardDetails.cvc) {
        setErrors(errors => ({...errors, cvc: "Can't be blank"}))
      }
      else {
        if (!regex2.test(cvc)) {
          setErrors(errors => ({...errors, cvc: "Wrong format, numbers only and incorrect length"}))
        }
        else {
          setErrors(errors => ({...errors, cvc: "Must be 3 numbers"}))
        }
      }
    }
    if (!/^\d+$/.test(cvc) && cvc.length === 3) {
      setErrors(errors => ({...errors, cvc: "Wrong format, numbers only"}))
    }
  }


  const handleChange = (e) => {
      setCardDetails(cardDetails => ({...cardDetails, [e.target.name]: e.target.value}))
  }
  const handleSubmit = e => {
    e.preventDefault()

    // Double check all information is correct to allow custom error behaviour
    if (!cardDetails.name) {
      setErrors(errors => ({...errors, name: "Can't be blank"}))
    }
    checkNumber(cardDetails.number)
    checkExp(cardDetails.expMM, cardDetails.expYY)
    checkCvc(cardDetails.cvc)

    if (cardDetails.name && !(checkNumber(cardDetails.number) || checkExp(cardDetails.expMM, cardDetails.expYY) || checkCvc(cardDetails.cvc))) {
      setSubmitted(true)
    }
  }

  const handleReset = () => {
    setCardDetails({name: '', number: "", expMM: "", expYY: "", cvc: ""})
    setErrors({name: "", number: "", expMM: "", expYY: "", cvc: ""})
    setSubmitted(false)
  }

  return (
    <>
      <StyledMain className="App">
        <Cards cardDetails={cardDetails}/>
        {submitted ? 
        <Submitted handleReset={handleReset} />
        :
        <Form handleSubmit={handleSubmit} handleChange={handleChange} cardDetails={cardDetails} errors={errors}/>
        }
      </StyledMain>
      <Footer/>
    </>
  );
}

export default App;
