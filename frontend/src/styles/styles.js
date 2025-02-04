import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Navigation Bar
export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  color: black;
  font-family: 'Poppins', sans-serif;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

// Black Logo
export const Logo = styled.img`
  width: 60px;
  height: auto;
  filter: brightness(0); /* Makes it black */
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

// Navigation Links
export const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
  }
`;

// Modern Nav Links
export const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #6bd4e7;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

// Buttons
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 35px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-right: 0;
  }
`;

// Modern Login Button
export const LoginButton = styled.button`
  background: linear-gradient(45deg, #ff8c00, #ff6700);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #ff6700, #ff4500);
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

// Guest Button
export const GuestButton = styled.button`
  color: white;
  background: transparent;
  border: 2px solid #ff8c00;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: #ff8c00;
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

// Home Page Container
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background: url('/images/college-gate-day.jpg') no-repeat center center/cover;
  position: relative;
  color: white;
  padding: 80px 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Soft overlay for readability */
  }

  @media screen and (max-width: 768px) {
    padding: 60px 15px;
  }
`;

// School Information Section
export const SchoolInfo = styled.div`
  margin-top: 20px;
  z-index: 1;
`;

// School Image
export const SchoolImage = styled.img`
  width: 80%;
  max-height: 70vh;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

// Main Title
export const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

// Text Content
export const LoremTextContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  font-size: 18px;
  text-align: justify;
  color: white;
  padding: 0 20px;
  line-height: 1.6;
  z-index: 1;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

// Admin Register Link
export const AdminRegisterLink = styled(Link)`
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: #6bd4e7;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
