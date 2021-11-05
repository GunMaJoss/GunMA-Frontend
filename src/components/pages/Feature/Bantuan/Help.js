import React from 'react';
import styled from 'styled-components';
import BgImg from '../../../..//images/Capture.PNG';


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

  padding-top: 60px;
`;

const Title = styled.p`
    text-align: center;
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;

const Desc = styled.p`
  text-align: center;
  font-size: 18px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 40px;
  text-align: center;
`;

const Desc2 = styled.p`
  text-align: center;
  font-size: 18px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 6rem;
  text-align: center;
`;

const Button2 = styled.a`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 20px;
  margin-left: 36.5rem;
  width: 250px;
  height: 51px;
  line-height: 71px;
  font-size: 20px;
  color: #000000;
  cursor: pointer;
  background: #FAE57C;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
  position: absolute;
  
`;

const Button = styled.a`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 20px;
  margin-left: 35rem;
  width: 300px;
  height: 51px;
  line-height: 71px;
  font-size: 20px;
  color: #000000;
  cursor: pointer;
  background: #FAE57C;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
  position: absolute;
  
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
          Need Information  <br />Related to Internships According<br/>to Your Field and Needs
          </Title>
          <Desc>
          Download the GunMA Application by clicking the link below
          </Desc>
          <Button href='https://bit.ly/webull-join' target='_blank'>
            <span>https://GunMAAppsDownload</span>
          
          </Button>
          <Desc2>
          Or Contact Us
          </Desc2>
          <Button2 href='https://bit.ly/webull-join' target='_blank'>
            <span>+(62) 822-3153-2688</span>
          
          </Button2>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;