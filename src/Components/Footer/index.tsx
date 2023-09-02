import footerLogo from "../../assets/images/footer-logo.jpeg";
import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { contactInfos, emailLink, googleMapsLink, schedules } from "./constant";
import {
  BgColor,
  ContactDiv,
  ContactHeadingStyle,
  ContactIcon,
  ContactLink,
  ContactText,
  ContactWrapper,
  CopyRights,
  FooterLink,
  FooterLinks,
  FooterLogo,
  FooterSection,
  HeadingStyle,
  // TermsHeading,
  // TermsTitle,
  TimeStyle,
} from "./style";
import { routes } from "../../routes";
import { StyledLink } from "../Navbar/style";

export const Footer = () => {
  return (
    <BgColor>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 "></section>
      <MDBFooter className="text-center text-lg-start text-muted">
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="4" lg="4" xl="3" className="mx-auto mb-5 mr-10">
                <HeadingStyle className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="white" icon="clock" className="me-3" />
                  TIMING
                </HeadingStyle>
                <TimeStyle>
                  {schedules.map((time) => (
                    <div key={time.name}>
                      {time.name} - {time.time}
                    </div>
                  ))}
                </TimeStyle>
              </MDBCol>

              <MDBCol
                lg="2"
                md="12"
                className="mb-4 mb-md-0 d-flex justify-content-center"
              >
                <StyledLink to={routes.home}>
                  <FooterLogo
                    src={footerLogo}
                    alt="Footer Logo"
                    className="w-100 footer-logo"
                  />
                </StyledLink>
              </MDBCol>

              <MDBCol md="5" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <ContactHeadingStyle className="text-uppercase fw-bold mb-4 ">
                  Contact
                </ContactHeadingStyle>
                <ContactWrapper>
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
                </ContactWrapper>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-top border-bottom">
          <TermsHeading>
            <TermsTitle to={routes.termsAndCondition}>
              Terms and Conditions |
            </TermsTitle>
            <TermsTitle to={routes.cancellationPolicy}>
              | Cancellation Policy |
            </TermsTitle>
            <TermsTitle to={routes.privacyPolicy}>| Privacy Policy</TermsTitle>
          </TermsHeading>
        </section> */}

        <FooterSection>
          <FooterLinks>
            <FooterLink to={routes.termsAndCondition}>
              Terms and Conditions
            </FooterLink>
            <FooterLink to={routes.cancellationPolicy}>
              Cancellation Policy
            </FooterLink>
            <FooterLink to={routes.privacyPolicy}>Privacy Policy</FooterLink>
          </FooterLinks>
        </FooterSection>

        <CopyRights className="text-center p-4">
          © 2021 ISKCON. All rights reserved.
        </CopyRights>
      </MDBFooter>
    </BgColor>
  );
};
