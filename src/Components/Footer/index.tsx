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
  CopyRights,
  ContactLink,
} from "./style";
import { contactInfos, emailLink, googleMapsLink, schedules } from "./constant";
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
                      {info.text.startsWith("tel:") ? (
                        <ContactText>
                          <ContactLink href={info.text}>
                            {info.text.replace("tel:", "")}
                          </ContactLink>
                        </ContactText>
                      ) : info.text.startsWith("map:") ? (
                        <ContactText>
                          <ContactLink
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.text.replace("map:", "")}
                          </ContactLink>
                        </ContactText>
                      ) : info.text.startsWith("mailto:") ? (
                        <ContactText>
                          <ContactLink href={emailLink}>
                            {info.text.replace("mailto:", "")}
                          </ContactLink>
                        </ContactText>
                      ) : (
                        <ContactText>{info.text}</ContactText>
                      )}
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
              <TermsTitle to={routes.termsAndCondition}>
                Terms and Conditions |
              </TermsTitle>
              <TermsTitle to={routes.cancellationPolicy}>
                | Cancellation Policy |
              </TermsTitle>
              <TermsTitle to={routes.privacyPolicy}>
                | Privacy Policy
              </TermsTitle>
            </TermsHeading>
          </TermsMDBContainer>
        </section>
        <div className="text-center p-4">
          <CopyRights>© 2021 ISKCON. All rights reserved.</CopyRights>
        </div>
      </BgColor>
    </StyledMDBFooter>
  );
};
