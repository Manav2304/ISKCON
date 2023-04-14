import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import footerLogo from "../../assets/images/footer-logo.jpeg";
import {
  FooterLogoStyle,
  ContactStyle,
  BgColor,
  TimeStyle,
  TermsHeading,
  Heading,
  TermsTitle,
} from "./style";
import { contactInfos, schedules } from "./constant";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

export const Footer = () => {
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <BgColor>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol>
                <Heading>
                  <MDBIcon icon="clock" className="me-0" />
                  Timings
                </Heading>
                <div className="mx-auto mb-4">
                  <TimeStyle>
                    {schedules.map((time) => (
                      <div key={time.name}>
                        {time.name} : {time.time}
                      </div>
                    ))}
                  </TimeStyle>
                </div>
              </MDBCol>
              <FooterLogoStyle>
                <MDBRow>
                  <img src={footerLogo} alt="Footer Logo" />
                </MDBRow>
              </FooterLogoStyle>
              <MDBCol>
                <ContactStyle>
                  {contactInfos.map((info) => (
                    <div key={info.text}>
                      <i className={`fa fa-${info.icon} `} />
                      <span>{info.text}</span>
                    </div>
                  ))}
                </ContactStyle>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section>
          <MDBContainer>
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
          </MDBContainer>
        </section>
        <div className="text-center p-4">
          © 2021 ISKCON. All rights reserved.
        </div>
      </BgColor>
    </MDBFooter>
  );
};
