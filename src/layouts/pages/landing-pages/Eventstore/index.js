/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DesignBlocks from "pages/LandingPages/Eventstore/DesignBlocks";

// Author page sections
import Footer from "pages/LandingPages/Author/sections/Footer";

// Routes
import routes from "routes";

// Images
// import bgImage from "assets/images/city-profile.jpg";

function Eventstore() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="30rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.3),
                rgba(gradients.dark.state, 0.8)
              )}, url("https://www.shutterstock.com/image-photo/happy-african-american-couple-dancing-600nw-2336657693.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <DesignBlocks />
      </MKBox>
      <DesignBlocks />
      <Footer />
    </>
  );
}

export default Eventstore;
