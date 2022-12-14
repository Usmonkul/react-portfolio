import React from "react";
import styled from "styled-components";
import { navLinks } from "../../data/config";
import { BigBtn } from "../../App.styles";
import Menu from "../menu/menu.component";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledNav>
        {Logo}
        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={name}>
                  <a href={url}>{name}</a>
                </li>
              ))}
          </ol>
          <div>
            <BigBtn
              className="resume-button"
              href="https://www.canva.com/design/DAFE2ZMuubc/InyJ-5X6FTAkkWIzdK9HBA/view?utm_content=DAFE2ZMuubc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </BigBtn>
          </div>
        </StyledLinks>
        <Menu />
      </StyledNav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  display: flex;
  align-items: center;
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    flex-shrink: 0;
    a {
      color: var(--green);
      flex-shrink: 0;
      font-size: clamp(25px, 5vw, 28px);
      &:hover,
      &:focus {
        opacity: 0.6;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      a {
        padding: 10px;
        &:before {
          content: "0" counter(item) ".";
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }
  .resume-button {
    margin-left: 15px;
    padding: 10px;
    font-size: var(--fz-xs);
  }
`;

const Logo = (
  <div className="logo" tabIndex="-1">
    <a href="/" aria-label="home">
      Usmon
    </a>
  </div>
);
