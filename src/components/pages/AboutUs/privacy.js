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
  font-size: 25px;
  margin-bottom: 25px;
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
         Privacy & Policy  <br /> 
          </Title>
          <Desc>
          Confidentiality of Personal Information is important to GunMA (Us). We are committed to protecting and respecting the privacy of users (you) when accessing and using the features, technology, content, and products that we provide on our applications and websites (hereinafter, collectively referred to as the Platform). <br/> <br/>This Privacy Policy sets the groundwork for how we use the personal information we receive from you. Personal Information Policy (Personal Information). This Privacy Policy applies to all Platform users, unless set out in a separate Privacy Policy. Please read our Personal Information Policy carefully so that you can understand our approach and how we use the information.
          </Desc>

          
        </Left>
      </Content2>
      
    </Section2>

    

    
  );
};

export default term;