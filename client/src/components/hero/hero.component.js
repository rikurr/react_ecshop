import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/amanda-vick-K0Vlk9DZ1dc-unsplash.jpg';

const HeroWrapper = styled.div`
  background-image: url(${heroImage});
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 100px;
  color: #03dac5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  >div{
    font-weight: bold;
  }
  h1{
    font-size: 70px;
  }
`;

const Hero = () => {
  return (<HeroWrapper>
    <div>
      <h1>Clothing App</h1>
    </div>
  </HeroWrapper>);
};

export default Hero;
