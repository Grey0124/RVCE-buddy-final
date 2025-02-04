import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #F8F9FA; /* Light modern background */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const UserSection = styled.div`
  text-align: center;
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    width: 250px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333; /* Modern dark gray */
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Button = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in-out;
  text-align: center;

  /* Different colors for different roles */
  &.student {
    background-color: #28A745; /* Green */
  }
  &.student:hover {
    background-color: #218838;
  }

  &.teacher {
    background-color: #007BFF; /* Blue */
  }
  &.teacher:hover {
    background-color: #0056b3;
  }

  &.admin {
    background-color: #DC3545; /* Red */
  }
  &.admin:hover {
    background-color: #C82333;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;
