import React from "react";
import "./Footer.css"; 

function Footer() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Add smooth scrolling animation
      });
    };

  return (
    <div>
      <div onClick={scrollToTop} className="Back-to-top">
        Back to top
      </div>

      <div className="cont">
        <div className="get-to-know-us">
          <ul>
            <h3>Get to Know Us</h3>
            <li>
              <a className="links" href="/">
                Careers
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Blog
              </a>
            </li>
            <li>
              <a className="links" href="/">
                About Amazon
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Investor Relations
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Amazon Devices
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Amazon Science
              </a>
            </li>
          </ul>
        </div>
        <div className="Make-Money-with-Us">
          <ul>
            <h3>Make Money with Us</h3>
            <li>
              <a className="links" href="/">
                Sell products on Amazon
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Sell on Amazon Business
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Sell apps on Amazon
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Become an Affiliate
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Advertise Your Products
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Self-Publish with Us
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Host an Amazon Hub
              </a>
            </li>
            <li>
              <a className="links" href="/">
                See More Make Money with Us
              </a>
            </li>
          </ul>
        </div>
        <div className="Amazon-Payment-Products">
          <ul>
            <h3>Amazon Payment Products</h3>
            <li>
              <a className="links" href="/">
                Amazon Business Card
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Shop with Points
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Reload Your Balance
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Amazon Currency Converter
              </a>
            </li>
          </ul>
        </div>
        <div className="Let-Us-Help-You">
          <ul>
            <h3>Let Us Help You</h3>
            <li>
              <a className="links" href="/">
                Amazon and COVID-19
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Your Account
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Your Orders
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Shipping Rates & Policies
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Returns & Replacements
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Manage Your Content and Devices
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Amazon Assistant
              </a>
            </li>
            <li>
              <a className="links" href="/">
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="hrr" />
      <div className="bottom">
        <div className="logo-cont">
          <img
            className="logo"
            onClick={scrollToTop}
            src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
          />
        </div>
        <div className="langu">
          <img
            src="https://w1.pngwing.com/pngs/101/401/png-transparent-language-icon-circle-pictogram-black-and-white-line-symbol-logo-emblem-thumbnail.png"
            alt=""
          />
          English
        </div>
        <div className="langu">$ USD-US Dollar</div>
        <div className="langu">
          <img
            src="https://cdn-icons-png.flaticon.com/128/206/206626.png"
            alt=""
          />
          United States
        </div>
      </div>
      <div className="built-by">
        <h1>By: Natnael Hailu</h1>
      </div>
    </div>
  );
}

export default Footer;
