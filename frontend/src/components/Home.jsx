import React from 'react';
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink } 
from '../styles/styles'
import { LoremIpsum } from 'lorem-ipsum';
import bg from "../assets/rvcefrontgate.jpg";
import bg1 from "../assets/rvcelogo.png";
import { Link, useNavigate } from 'react-router-dom';

// Importing components for each section
import OfferCard from './OfferCard';
import DemoForm from './DemoForm';
import PricingSection from './PricingSection';
import AboutUsSection from './AboutUsSection';
import GetInTouchSection from './GetInTouchSection';
import Footer from './Footer';
import { BsFillBookFill } from 'react-icons/bs';

const lorem = new LoremIpsum();

const Home = () => {
  const navigate = useNavigate();
  const loremText = lorem.generateParagraphs(1);

  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  return (
    <>
      <Navbar>
        <Logo src={bg1} alt="Logo" />
          <NavigationLinks>
          <NavLink href="https://www.rvce.edu.in/">Visit-RVCE-Website</NavLink>
         </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
        </ButtonsContainer>
      </Navbar>
      <HomeContainer>
        <SchoolInfo>
          <Title>RVCE BUDDY</Title>
          <LoremTextContainer>
            <p>Introduction paragraph to RVCE buddy will go here</p>
          </LoremTextContainer>
          <AdminRegisterLink to="/admin/register">Admin Register</AdminRegisterLink>
        </SchoolInfo>
        <SchoolImage src={bg} alt="pupils" />

       

       

        {/* Footer Section */}
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;




// // Home.js
// import React from 'react';
// import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, AdminRegisterLink } from '../styles/styles';
// import { LoremIpsum } from 'lorem-ipsum';
// import bg from "../assets/bg.png";
// import bg1 from "../assets/bg1.png";
// import { Link, useNavigate } from 'react-router-dom';

// // Importing components for each section
// import OfferCard from './OfferCard';
// import DemoForm from './DemoForm';
// import PricingSection from './PricingSection';
// import AboutUsSection from './AboutUsSection';
// import GetInTouchSection from './GetInTouchSection';
// import Footer from './Footer';
// import { BsFillBookFill } from 'react-icons/bs';


// const lorem = new LoremIpsum();

// const Home = () => {
//   const navigate = useNavigate();
//   const loremText = lorem.generateParagraphs(1);

//   const handleLoginClick = () => {
//     navigate('/choose-user');
//   };

//   return (
//     <>
//       <Navbar>
//         <Logo src={bg1} alt="Logo" />
//         <NavigationLinks>
//           <NavLink href="#">Features</NavLink>
//           <NavLink href="#">Pricing</NavLink>
//           <NavLink href="#">Request a Demo</NavLink>
//         </NavigationLinks>
//         <ButtonsContainer>
//           <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
//         </ButtonsContainer>
//       </Navbar>

//       {/* Hero Section */}
//       {/* School Management System Info */}
//       {/* Admin Register Link */}
      
//       {/* What the school management system offers */}
//       <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
//       <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
//       {/* Add more OfferCard components as needed */}

//       {/* Request a Demo Form */}
//       <DemoForm />

//       {/* Pricing Section */}
//       <PricingSection />

//       {/* About Us Section */}
//       <AboutUsSection />

//       {/* Get In Touch Section */}
//       <GetInTouchSection />

//       {/* Footer Section */}
//       <Footer />
//     </>
//   );
// };

// export default Home;
