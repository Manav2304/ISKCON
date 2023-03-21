import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import footerlogo from "../../assets/footerlogo.jpeg";
import { FooterLogoStyle, ContactStyle, BgColor } from "./style";
import { socialmediaIcon, contactInfo, templeTimes } from "./constant";

export const Footer = () => {
  return (
    <MDBFooter className="text-center text-lg-start text-muted  ">
      <BgColor>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="clock" className="me-3" />
                  Timings
                </h6>
                <div>
                  {templeTimes.map((time, index) => (
                    <div key={index}>
                      {time.name}:{time.time}
                    </div>
                  ))}
                </div>
              </MDBCol>

              <FooterLogoStyle>
                <MDBRow>
                  <img src={footerlogo} />
                </MDBRow>
              </FooterLogoStyle>
              <MDBCol>
                <ContactStyle>
                  {contactInfo.map((info, index) => (
                    <div key={index}>
                      <br />
                      <i className={`fa fa-${info.icon}`} />
                      <span>{info.text}</span>
                    </div>
                  ))}
                </ContactStyle>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </BgColor>
    </MDBFooter>
  );
};
