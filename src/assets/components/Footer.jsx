import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" aria-label="Site footer">
      <p>
        &copy; <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}
        Created by{" "}
        <a
          href="https://github.com/SylvainPS78"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Sylvain Web's GitHub profile"
        >
          Sylvain Web
        </a>
      </p>
    </footer>
  );
};

export default Footer;
