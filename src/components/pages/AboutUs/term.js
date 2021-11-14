import React from 'react';
import styled from 'styled-components';

const Section2 = styled.section`

  height: 500px;
  width: 1000px;
  display: block;
  margin : 4rem auto;
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
  border-radius: 18px;
`;

const Content2 = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-top: 50px;
`;

const Title = styled.p`
text-align: center;
margin-bottom: 25px;
  font-size: 25px;
  color: #04050a;
  font-weight: 400;
`;

const Desc = styled.p`
padding-left: 10rem;
  width: 900px;
  font-size: 17px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const term = () => {
  return (
    <Section2>
      <Content2>
        <Left>

        <Title>
         Term & Condition  <br /> 
          </Title>
          <Desc>
          Use of Intellectual Property will notify users that the content, logos and other visual media that you create are yours and are protected by copyright laws. <br/> <br/>The termination clause will inform that user accounts on your website and mobile applications or user access to your mobile and wen sites (if the user is unable to have an account with you) can be provided or at your discretion. <br/><br/>The governing law will tell which user governs will tell which user governs the agreement. This must be the country where your company is headquartered or the country where you operate your website and mobile app
          </Desc>

          
        </Left>
      </Content2>
      
    </Section2>

    

    
  );
};

export default term;