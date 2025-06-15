import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import {
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import TerminalIcon from "@mui/icons-material/Terminal"; // Optional icon
import CodeIcon from "@mui/icons-material/Code";         // Optional icon
import MemoryIcon from "@mui/icons-material/Memory";     // Optional icon

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 0.7rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;

  a {
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
const IconLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem;
  margin: 0 0.7rem;
`;

const IconLabel = styled.span`
  margin-top: 4px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;


const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Lakhanji Mishra</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Achievements">Achievements</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
  <IconLabelWrapper>
    <SocialMediaIcon href={Bio.Leetcode} target="_blank" title="LeetCode">
      <CodeIcon />
    </SocialMediaIcon>
    <IconLabel>LC</IconLabel>
  </IconLabelWrapper>

  <IconLabelWrapper>
    <SocialMediaIcon href={Bio.gfg} target="_blank" title="GeeksforGeeks">
      <MemoryIcon />
    </SocialMediaIcon>
    <IconLabel>GFG</IconLabel>
  </IconLabelWrapper>

  <IconLabelWrapper>
    <SocialMediaIcon href={Bio.codestudio} target="_blank" title="CodeStudio">
      <TerminalIcon />
    </SocialMediaIcon>
    <IconLabel>CN</IconLabel>
  </IconLabelWrapper>

  <IconLabelWrapper>
    <SocialMediaIcon href={Bio.twitter} target="_blank" title="Twitter">
      <Twitter />
    </SocialMediaIcon>
    <IconLabel>X</IconLabel>
  </IconLabelWrapper>

  <IconLabelWrapper>
    <SocialMediaIcon href={Bio.linkedin} target="_blank" title="LinkedIn">
      <LinkedIn />
    </SocialMediaIcon>
    <IconLabel>IN</IconLabel>
  </IconLabelWrapper>

  <IconLabelWrapper>
    <SocialMediaIcon href={Bio.insta} target="_blank" title="Instagram">
      <Instagram />
    </SocialMediaIcon>
    <IconLabel>Insta</IconLabel>
  </IconLabelWrapper>
</SocialMediaIcons>

        <ContactInfo>
          📞 <a href="tel:8303773215">Mobile: 8303773215</a><br />
          📧 <a href="mailto:ljmishra1112002@gmail.com">
            Email: ljmishra1112002@gmail.com
          </a>
        </ContactInfo>
        <Copyright>&copy; 2024 Lakhanji Mishra. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
