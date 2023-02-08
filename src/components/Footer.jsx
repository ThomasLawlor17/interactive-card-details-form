import React from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
    
    a {
        width: 40px;
        padding: 10px;
        text-decoration: none;
        color: var(--very-dark-violet);
        transition: all 0.3s ease-in-out;

        svg {
            width: 20px;
            height: 20px;
        }

        &:hover {
            color: #5187ED;
        }
    }
    @media (min-width: 770px) {
        a:not(.visible) {
            display: none;
        }
    }
    @media (max-width: 769px) {
        left: 0;
        right: 0;
        text-align: center;
    }
    @media (max-width: 374px) {
      scale: 0.8;
      white-space: nowrap;
    }
`;

const StyledSocialList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
margin: 0;
padding: 0;
list-style: none;
position: absolute;
bottom: 0;
gap: 15px;

&::after {
  content: '';
  display: block;
  width: 1px;
  height: 90px;
  margin: 0 auto;
  background-color: var(--white);
}

li {
  &:last-of-type {
    margin-bottom: 20px;
  }

  a {
    padding: 10px;

    svg {
      width: 20px;
      height: 20px;
      color: var(--white);
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translateY(-3px);
        color: #5187ED;
      }
    }
  }
}

@media (max-width: 769px) {
    display: none;
}
`;

export default function Footer() {

    const socialMedia = [
        {
            name: 'Portfolio',
            url: 'http://thomaslawlor.com/',
            icon: <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 447 471"><title>Logo</title><path d="M 0 0 L 447 0 L 447 170 L 308 170 L 308 336.5 L 307.5 337 L 267 337 L 267 130 L 407 130 L 407 40 L 40.5 40 L 40 40.5 L 40 130 L 0 130 L 0 0 Z " fill="currentColor"/><path d="M 139 130 L 178.5 130 L 179 130.5 L 179 431 L 306.5 431 L 307 431.5 L 307 471 L 139 471 L 139 130 Z " fill="currentColor"/></svg>
        },
        {
          name: 'GitHub',
          url: 'https://github.com/thomaslawlor17',
          icon: <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/thomas-lawlor-8838b8114/',
          icon: <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
        },
        {
          name: 'Email',
          url: 'mailto:thomas.lawlor96@gmail.com',
          icon: <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><title>Email</title><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
        },
      ]


	return (
        <footer>
            <StyledSocialList>
                {socialMedia && socialMedia.map(({ url, name, icon }, i) => (
                    <li key={i}>
                        <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                            {icon}
                        </a>
                    </li>
                ))}
            </StyledSocialList>
		    <StyledDiv>
			    <a href="http://thomaslawlor.com/" className="visible">Thomas Lawlor - 2023</a>
			    <a href="http://thomaslawlor.com/">
				    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 447 471">
				    	<title>Logo</title>
					    <path
					    	d="M 0 0 L 447 0 L 447 170 L 308 170 L 308 336.5 L 307.5 337 L 267 337 L 267 130 L 407 130 L 407 40 L 40.5 40 L 40 40.5 L 40 130 L 0 130 L 0 0 Z "
					    	fill="currentColor"
					    />
					    <path
					    	d="M 139 130 L 178.5 130 L 179 130.5 L 179 431 L 306.5 431 L 307 431.5 L 307 471 L 139 471 L 139 130 Z "
					    	fill="currentColor"
					    />
				    </svg>
			    </a>
			    <a href="https://github.com/thomaslawlor17">
			    	<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
			    		<title>GitHub</title>
			    		<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
			    	</svg>
		    	</a>
               <a href="https://www.linkedin.com/in/thomas-lawlor-8838b8114/">
                   <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                       <title>LinkedIn</title>
                       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                       <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
                <a href="mailto:thomas.lawlor96@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
		                <title>Email</title>
		                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
		                <polyline points="22,6 12,13 2,6" />
	                </svg>
                </a>
		    </StyledDiv>
        </footer>
	);
}
