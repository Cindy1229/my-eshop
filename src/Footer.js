import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__col">
        <h3>Author: Cindy Shi</h3>
        <p>
          Github: <a href="https://github.com/Cindy1229">Cindy1229</a>
        </p>
        <p>
          Email: <a href="shi426@purdue.edu">shi426@purdue.edu</a>
        </p>
        <p> Tel: 7657017548</p>
      </div>

      <div className="footer__col">
        <h3>Disclaimer:</h3>
        <p>
          This is just a mock up e-commerce website. So the card payment will
          not be actually charging. However, for security sake, please don't put
          any real info.😃
        </p>
      </div>

      <div className="footer__col">
        <h3>Roadmap:</h3>
        <p>
          Wesite still in contruction! May be some page to show the detail of
          the product. Also the search bar will work very soon... 😙
        </p>
      </div>
    </div>
  );
}

export default Footer;
