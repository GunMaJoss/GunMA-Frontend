import React from 'react';
import styled from 'styled-components';
import visi from './visi';
import term from './term';

const Section4 = styled.section`
text-align: center;
  height: 500px;
  width: 1000px;
  display: block;
  margin : 0 auto;
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
  border-radius: 18px;
`;

function AboutUs() {
  return (
    <Section4> 
       <visi />
       <term />
    </Section4>
  );
}

export default AboutUs;
