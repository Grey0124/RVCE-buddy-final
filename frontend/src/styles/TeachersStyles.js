// TeachersStyles.js
import styled from 'styled-components';

export const TeachersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('/images/teacher-dashboard-bg.jpg') no-repeat center center/cover;
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
    background: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    padding: 25px;
  }
`;

export const TeachersHeader = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #003366;
  text-align: center;
  margin-bottom: 20px;
`;

export const TeacherList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TeacherItem = styled.li`
  background: linear-gradient(45deg, #90EE90, #32CD32); /* Green gradient */
  color: white;
  border-radius: 8px;
  padding: 12px 20px;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AddTeacherForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-top: 20px;
`;

export const AddTeacherInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #0056b3;
    box-shadow: 0px 0px 8px rgba(0, 86, 179, 0.5);
    outline: none;
  }
`;

export const AddTeacherButton = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(45deg, #FF4500, #FF6347); /* Orange gradient */
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #FF6347, #FF8C00);
    transform: scale(1.05);
  }
`;
