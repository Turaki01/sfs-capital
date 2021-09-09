import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

const LandingContainer = styled.footer`
  background: ${colors.pri};
  min-height: 500px;
  padding: 70px 60px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const SocialMediaContainer = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 20% 20% 20% auto;
    grid-column-gap: 50px;
    max-width: 1000px;
    margin: auto;
    align-items: center;
  }
`;

const ChannelsContainer = styled.div`
  margin-bottom: 20px;
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 50px;
    align-items: center;
  }
`;

const ChannelsText = styled.div`
  color: #fff;
  text-align: center;

  h1 {
    font-weight: normal;
  }

  @media ${device.laptop} {
    text-align: right;
  }
`;

const ChannelsSubText = styled.span`
  color: #abafbc;
  text-align: center;
  font-size: 14px;

  @media ${device.laptop} {
    text-align: left;
  }
`;


const ChannelsSubTextP = styled.p`
  color: #abafbc;
  text-align: center;
  font-size: 14px;

  @media ${device.laptop} {
    text-align: left;
  }
`;

const BorderDiv = styled.div`
  @media ${device.laptop} {
    border-right: 1px solid #abafbc75;
    height: 60px;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const SocialMediaElements = styled.div`
  position: relative;
  margin-bottom: 40px;

  @media ${device.laptop} {
    margin-bottom: 0;
  }
`;

const SocialIconDiv = styled.div`
  width: 66px;
  height: 66px;
  background: #ffffff1a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin: auto;
`;

const ContactCard = styled.div`
  background: ${colors.sec};
  border-radius: 20px;
  padding: 30px;
  color: #fff;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
  }
`;

export {
  LandingContainer,
  SocialMediaContainer,
  SocialIconDiv,
  ContactCard,
  BorderDiv,
  SocialMediaElements,
  ChannelsContainer,
  ChannelsText,
  ChannelsSubText,
  ChannelsSubTextP
};
