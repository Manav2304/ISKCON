import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import footerLogo from "../../assets/images/footer-logo.jpeg";
import { FooterLogoStyle, ContactStyle, BgColor, TimeStyle } from "./style";
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
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="clock" className="me-3" />
                  Timings
                </h6>
                <div>
                  <TimeStyle>
                    {schedules.map((time) => (
                      <div key={time.name}>
                        {time.name}:{time.time}
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
        <section className="bg-light py-3">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <h6 className="fw-bold mb-3">
                  <Link to={routes.termsAndCondition}>
                    Terms and Conditions
                  </Link>
                </h6>
              </MDBCol>
              <MDBCol>
                <h6 className="fw-bold mb-3">
                  <Link to={routes.cancellationPolicy}>
                    Cancellation Policy
                  </Link>
                </h6>
              </MDBCol>
              <MDBCol>
                <h6 className="fw-bold mb-3">
                  <Link to={routes.privacyPolicy}>Privacy Policy</Link>
                </h6>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div className="text-center p-4">
          © 2021 ISKCON. All rights reserved.
        </div>
      </BgColor>
    </MDBFooter>
  );
};
