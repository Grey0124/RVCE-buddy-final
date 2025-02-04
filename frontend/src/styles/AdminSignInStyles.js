// AdminSignInStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/images/admin-office.jpg') no-repeat center center/cover;
  min-height: 100vh;
  position: relative;
  padding: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); /* Soft overlay for readability */
  }
`;

// Modern Card-style Form
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 380px;
  padding: 30px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    padding: 25px;
  }
`;

// Input Fields with Modern Styling
export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #0056b3;
    box-shadow: 0px 0px 8px rgba(0, 86, 179, 0.5);
    outline: none;
  }
`;

// Sign-In Button with Gradient & Hover Effects
export const SubmitButton = styled(Link)`
  width: 100%;
  padding: 14px;
  margin-top: 15px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #003366, #0056b3);
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #0056b3, #007bff);
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }
`;

// Forgot Password Link
export const ForgotPasswordLink = styled(Link)`
  margin-top: 10px;
  color: #0056b3;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
    text-decoration: underline;
  }
`;

// Sign-Up Link
export const SignUpLink = styled(Link)`
  margin-top: 15px;
  color: #ff4500;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #cc3700;
    text-decoration: underline;
  }
`;
