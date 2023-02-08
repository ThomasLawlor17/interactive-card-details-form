import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
color: var(--white);
display: flex;
flex-direction: column;
align-items: center;
gap: 32px;

.card-img {
  width: calc(450px - 52px);
  height: calc(249px - 52px);
	border-radius: 10px;
	background-size: cover;
	color: var(--White);
	position: relative;
	padding: 26px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background-color: transparent;
        @media (min-width: 770px) {
          box-shadow: 8px 20px 28px var(--light-grayish-violet);
          z-index: -9999;
        }
    }
}
.card-front {
  background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
  @media (min-width: 770px) {
    right: 48px;
    margin-right: 48px;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    word-spacing: 6px;

    span {
      font-size: 14px;
      letter-spacing: 3px;

      &:first-child {
        text-transform: uppercase;
      }
    }
  }

  > span {
    font-size: 28px;
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
  @media (min-width: 770px) {
    margin-left: 48px;
  }

  span {
    position: absolute;
    right: 60px;
    top: 112px;
    font-size: 14px;
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
    right: 28px;

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
    left: 28px;
    z-index: -1;

    span {
      right: 39px;
      top: 69px;
      font-size: 14px;
    }
  }
}
`

export default function Cards({cardDetails}) {
  return (
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
  )
}
