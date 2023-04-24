import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import footerLogo from "../../assets/images/footer-logo.jpeg";
import {
  FooterLogoStyle,
  ContactStyle,
  BgColor,
  TimeStyle,
  TermsHeading,
  Heading,
  TermsTitle,
  ContactDiv,
  ContactIcon,
  ContactText,
  StyledMDBFooter,
  TermsMDBContainer,
  ContactMDBCol,
  TimeMDBCol,
} from "./style";
import { contactInfos, schedules } from "./constant";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

export const Footer = () => {
  return (
    <StyledMDBFooter className="text-center text-lg-start text-muted">
      <BgColor>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <TimeMDBCol>
                <Heading>Timing</Heading>
                <div className="mb-4 text-center">
                  <TimeStyle>
                    {schedules.map((time) => (
                      <div key={time.name}>
                        {time.name} - {time.time}
                      </div>
                    ))}
                  </TimeStyle>
                </div>
              </TimeMDBCol>
              <FooterLogoStyle>
                <MDBRow>
                  <img src={footerLogo} alt="Footer Logo" />
                </MDBRow>
              </FooterLogoStyle>
              <ContactMDBCol>
                <ContactStyle>
                  {contactInfos.map((info) => (
                    <ContactDiv key={info.text}>
                      <ContactIcon className={`fa fa-${info.icon} `} />
                      <ContactText>{info.text}</ContactText>
                    </ContactDiv>
                  ))}
                </ContactStyle>
              </ContactMDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section>
          <TermsMDBContainer>
            <TermsHeading>
              <Link to={routes.termsAndCondition}>
                <TermsTitle>Terms and Conditions | </TermsTitle>
              </Link>
              <Link to={routes.cancellationPolicy}>
                <TermsTitle>Cancellation Policy | </TermsTitle>
              </Link>
              <Link to={routes.privacyPolicy}>
                <TermsTitle>Privacy Policy</TermsTitle>
              </Link>
            </TermsHeading>
          </TermsMDBContainer>
        </section>
        <div className="text-center p-4">
          <TermsTitle>© 2021 ISKCON. All rights reserved.</TermsTitle>
        </div>
      </BgColor>
    </StyledMDBFooter>
  );
};
