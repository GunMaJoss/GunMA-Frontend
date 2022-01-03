import React from 'react';
import styled from 'styled-components';
import BgImg from '../../../..//images/bg.PNG';


const Section = styled.section`
  background-image: url(${BgImg});
  height: 750px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-left: 100px;
  padding-top: 110px;
`;

const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;

const Desc = styled.p`
  width: 472px;
  font-size: 18px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 40px;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 30px;
  width: 210px;
  height: 51px;
  line-height: 71px;
  font-size: 20px;
  text-align: center;
  color: #000000;
  cursor: pointer;
  background: #FAE57C;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
          More Comprehensive  <br /> Internship Information
          </Title>
          <Desc>
          Gunma is a forum for information seekers about internships spread throughout Indonesia. GunMA provides information about internships in more comprehensive detail. GunMA provides various advantages of features to view internship information based on several categories such as padiable and unpaidbale, based on the implementation of internships (WFH/WFO), as well as internship classification according to your best city.
          </Desc>
          <Button href='https://play.google.com/store/apps/details?id=com.gunmajoss.gunma' target='_blank'>
            <span>Get mobile version</span>
          
          </Button>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;