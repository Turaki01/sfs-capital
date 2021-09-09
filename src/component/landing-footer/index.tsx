import React from "react";
import {
  BorderDiv,
  ChannelsContainer,
  ChannelsSubText,
  ChannelsSubTextP,
  ChannelsText,
  ContactCard,
  LandingContainer,
  SocialIconDiv,
  SocialMediaContainer,
  SocialMediaElements,
} from "./styles";

import AndroidIcon from "../../assets/svg/android.svg";
import DownloadIcon from "../../assets/svg/download-icon.svg";
import AppleIcon from "../../assets/svg/apple.svg";
import WebIcon from "../../assets/svg/web-icon.svg";

const LandingFooter = () => {
  return (
    <LandingContainer>
      <div>
        <ChannelsContainer>
          <ChannelsText>
            <h1>
              Our <br />
              channels
            </h1>
          </ChannelsText>

          <ChannelsSubText>
            <ChannelsSubTextP>Get access to sfs life using <br />
            any of the following plaforms</ChannelsSubTextP>
          </ChannelsSubText>
        </ChannelsContainer>

        <SocialMediaContainer>
          <SocialMediaElements>
            <SocialIconDiv>
              <img src={AndroidIcon} alt="android" />
            </SocialIconDiv>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={DownloadIcon} alt="Download" />
              <p
                style={{ color: "#fff", fontSize: "13px", paddingLeft: "10px" }}
              >
                Download on <br /> Play Store
              </p>
            </div>

            <BorderDiv></BorderDiv>
          </SocialMediaElements>

          <SocialMediaElements>
            <SocialIconDiv>
              <img src={AppleIcon} alt="android" />
            </SocialIconDiv>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={DownloadIcon} alt="Download" />
              <p
                style={{ color: "#fff", fontSize: "13px", paddingLeft: "10px" }}
              >
                Download on <br /> App Store
              </p>
            </div>

            <BorderDiv></BorderDiv>
          </SocialMediaElements>

          <SocialMediaElements>
            <SocialIconDiv>
              <img src={WebIcon} alt="android" />
            </SocialIconDiv>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={DownloadIcon} alt="Download" />
              <p
                style={{ color: "#fff", fontSize: "13px", paddingLeft: "10px" }}
              >
                Get Started <br />
                Online
              </p>
            </div>
          </SocialMediaElements>

          <ContactCard>
            <p style={{ marginBottom: "14px" }}>
              Contact us for more infomation
            </p>

            <h4 style={{ margin: "0" }}>Info@sfsnigeria.com</h4>

            <p style={{ marginTop: "14px" }}>098-793 079-383</p>
          </ContactCard>
        </SocialMediaContainer>
      </div>
    </LandingContainer>
  );
};

export default LandingFooter;
