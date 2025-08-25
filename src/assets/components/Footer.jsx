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
      <p>
        {" "}
        Image by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alanyadk profile on Pixabay"
          href="https://pixabay.com/users/alanyadk-1919646/"
        >
          Alanyadk
        </a>{" "}
        from{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Pixabay website"
          href="https://pixabay.com/"
        >
          Pixabay
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit PokeApi Website"
          href="https://pokeapi.co/"
        >
          PokeAPI
        </a>
      </p>
    </footer>
  );
};

export default Footer;
