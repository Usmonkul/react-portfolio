import styled from "styled-components";
import { email } from "../../data/config";

const Hero = () => {
  return (
    <StyledHeroSection>
      <h1>Hi, my name is</h1>
      <h2 className="big-heading">Khakimov Usmonkul.</h2>
      <h4 className="big-heading">I build things for the web.</h4>
      <p className="description">
        I'm a Front-end engineer specializing in building interactive and
        responsive websites for the web. Currently, I am focused on building
        accessible single page applications using React and other new
        technologies.
      </p>
      <a
        className="email-link"
        href={`mailto:${email}`}
        target="_blank"
        rel="noreferrer"
      >
        Reach at me!
      </a>
    </StyledHeroSection>
  );
};

export default Hero;

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  padding-top: 10%;
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-family: var(--font-mono);
    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h4 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }
  .description {
    margin: 20px 0 0;
    max-width: 540px;
    font-size: var(--fz-md);
  }
  .email-link {
    margin-top: 50px;
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  }
`;
