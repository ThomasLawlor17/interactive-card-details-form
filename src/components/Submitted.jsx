import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
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

export default function Submitted({handleReset}) {
  return (
    <StyledDiv className="submitted">
    <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" strokeWidth="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stopColor="#6348FE"/><stop offset="1" stopColor="#610595"/></linearGradient></defs></svg>
    <h1>THANK YOU!</h1>
    <p>We've added your card details</p>
    <button className='sbmt' onClick={handleReset}>Continue</button>
  </StyledDiv>
  )
}
