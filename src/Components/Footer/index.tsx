import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { templeTimes } from "./constant";
export const Footer = () => {
  return (
    <MDBFooter className="text-center text-lg-start text-muted bg-dark ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {[
            {
              name: "Facebook",
              href: "https://www.facebook.com/groups/254840054550446",
              icon: "facebook-f",
            },
            {
              name: "Twitter",
              href: "https://twitter.com/iskcon_vvn",
              icon: "twitter",
            },
            {
              name: "Google",
              href: "#",
              icon: "google",
            },
            {
              name: "Instagram",
              href: "#",
              icon: "instagram",
            },
            {
              name: "LinkedIn",
              href: "#",
              icon: "linkedin",
            },
            {
              name: "Telegram",
              href: "https://t.me/iskconvvn",
              icon: "telegram",
            },
          ].map((item) => (
            <a key={item.name} href={item.href} className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon={item.icon} />
            </a>
          ))}
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Timings
              </h6>
              <div dangerouslySetInnerHTML={{ __html: templeTimes }} />
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <img url="C:\Users\lenovo\OneDrive\Desktop\New folder\ISKCON\src\images\footer.jpeg" />
            </MDBCol> */}

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                234 567 89
              </p>
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
    </MDBFooter>
  );
};
