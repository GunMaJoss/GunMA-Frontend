import React from 'react';
import styled from 'styled-components';

const Section1 = styled.section`
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

const Content1 = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-top: 50px;
`;

const Title = styled.p`
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


const visi = () => {
  return (
    <Section1>
      <Content1>
        <Left>

        <Title>
        <img src="images/logo8.png"></img> <br/>
          </Title>
          <Desc>
          GunMA is an application that helps students, especially high school seniors and undergraduate students to get complete and detailed information about internships
          </Desc>

          <Title>
         Vision  <br /> 
          </Title>
          <Desc>
          Make it easier for someone to get an internship according to what they want
          </Desc>
          
          <Title>
          Mission  <br /> 
          </Title>
          <Desc>
          Providing services related to internships to provide opportunities for the younger generation to hone their skills.<br/>Accommodating internship information and providing opportunity for each achiever to gain experience in terms of hard skills and soft skills
          </Desc>
        </Left>
      </Content1>
      
    </Section1>

    

    
  );
};

export default visi;