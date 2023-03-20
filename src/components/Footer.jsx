import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="pt-3 pb-4">
        <h1 className="footer-michigan-logo">M</h1>
        <h6 className="wolverines-corner-footer">&copy; Wolverines Corner</h6>
        <h6 className="go-blue-footer">Go Blue!</h6>
        <p className="email-footer fs-6">
          <a href="mailto:cory@corycox.com">Email Me</a>
        </p>
      </div>
      <footer className="footer-nav">
        <ul className="pt-3">
          <li className="pe-3">
            <a href="#">Football</a>
          </li>
          <li className="pe-3">
            <a href="#">Basketball</a>
          </li>
          <li className="pe-3">
            <a href="#">Home</a>
          </li>
          <li className="pe-3">
            <a href="#">Other Sports</a>
          </li>
          <li className="pe-3">
            <a href="#">Social Media</a>
          </li>
        </ul>
      </footer>
    </footer>
  );
}
