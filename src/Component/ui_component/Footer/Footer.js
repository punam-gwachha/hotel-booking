import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <FooterContainer className=".main-footer">
      <div className="Top-footer">
        <div className="row">
          <div className=" col-md-2 col-sm-4">
            <h6>
              <a href="#">Your Account</a>
            </h6>
          </div>
          <div className=" col-md-3 col-sm-4">
            <h6>
              <a href="#">Booking.com for Business</a>
            </h6>
          </div>
          <div className=" col-md-2 col-sm-4">
            <h6>
              <a href="#">Become an affilate</a>
            </h6>
          </div>
          <div className=" col-md-3 col-sm-6">
            <h6>
              <a href="#">Make changes to your booking</a>
            </h6>
          </div>
          <div className=" col-md-2 col-sm-4">
            <h6>
              <a href="#">Customer service help</a>
            </h6>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="row">
          <div className=" col-md-2 col-sm-4">
            <h6>Most Popular</h6>
            <br />
            <ul className="list-unstyled">
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Regions </a>
              </li>
              <li>
                <a href="#">Cities</a>
              </li>
              <li>
                <a href="#">Districts</a>
              </li>
              <li>
                <a href="#">Airports</a>
              </li>
              <li>
                <a href="#">Places of Interest</a>
              </li>
              <li>
                <a href="#">Hotels</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-4">
            <h6>Search by Category</h6>
            <br />
            <ul className="list-unstyled">
              <li>
                <a href="#">Appartments</a>
              </li>
              <li>
                <a href="#">Holiday rentals</a>
              </li>
              <li>
                <a href="#">Resorts</a>
              </li>
              <li>
                <a href="#">Villas</a>
              </li>
              <li>
                <a href="#">Guest houses</a>
              </li>
              <li>
                <a href="#">Hostels</a>
              </li>
              <li>
                <a href="#">B&Bs</a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 col-sm-4">
            <h6>Other Information</h6>
            <br />
            <ul className="list-unstyled">
              <li>
                <a href="#">About Booking.com</a>
              </li>
              <li>
                <a href="#">Give website feedback</a>
              </li>
              <li>
                <a href="#">Customer Service help</a>
              </li>
              <li>
                <a href="#">Partner help</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press centre</a>
              </li>
              <li>
                <a href="#">Investor relations</a>
              </li>
              <li>
                <a href="#">Statement</a>
              </li>
              <li>
                <a href="#">Corporate contact</a>
              </li>
              <li>
                <a href="#">We Price Match</a>
              </li>
            </ul>
          </div>

          <div className=" col-md-5 col-sm-7">
            <h6>Booking.com</h6>
            <br />
            <p>
              Is based in Amsterdam, the Netherlands and is supported
              internationally by 198 offices in 70 Countries.
            </p>
            <br />
            <h6>Save time, save money!</h6>
            <div className="email-main">
              <div className="input">
                <form>
                  <input type="text" placeholder="Your email.." />
                  <button type="button" class="btn btn-primary">
                    Suscribe
                  </button>
                  <br />
                  <input type="checkbox" /> Send me a link to get a free
                  Booking.com app
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*bottom*/}
        <hr />
        <div className="footer-bottom">
          <div class="container ">
            <p className="text-center">
              Copyright &copy; 1996-{new Date().getFullYear()} Booking.com.All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .Top-footer {
    background: #191d43;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 100px;
    padding-right: 100px;
  }
  .footer-middle {
    background: #1e2248;
    padding-top: 20px;
    color: Grey;
    padding-left: 100px;
    padding-right: 100px;
  }

  a {
    color: #8c91a6;
  }
  .input [type="text"] {
    background: #12173d;
    border: #12173d;
    padding-top: 4px;
    padding-bottom: 7px;
    padding-left: 5px;
    color: white;
  }
  hr {
    background: #8c91a6;
  }
  h6 {
    padding: 0;
    margin: 0;
    color: white;
  }

  p {
    color: white;
  }
  .footer-bottom {
    padding-top: 0px;
    padding-bottom: 1px;
  }
`;
