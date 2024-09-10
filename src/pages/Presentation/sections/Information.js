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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Own the
                    <br />
                    Ticket Anywhere
                  </>
                }
                description="With Ticket Anywhere, the world of events is at your fingertips! Our innovative platform allows you to discover, purchase, and manage tickets for a wide range of events—from concerts and sports games to festivals and theater performances—all in one place."
              />
              <RotatingCardBack
                image={bgBack}
                title="Guess What"
                description="You will have Convenience: Buy tickets anytime, anywhere, using our user-friendly mobile app or website.
Variety: Access a diverse selection of events, ensuring there’s something for everyone.
Secure Transactions: Enjoy peace of mind with our secure payment processing and ticket delivery options.
Instant Access: Receive your tickets instantly via email or mobile, so you can focus on enjoying the event."
                action={{
                  type: "internal",
                  route: "/auth/sign-in",
                  label: "Buy Now",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Online Registration and Ticketing"
                  description="Simplifies the registration process for attendees with customizable forms and secure payment options.
Supports various ticket types, pricing tiers, and discounts to cater to different audience segments."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Visitor Management"
                  description="Manages attendee flow to prevent overcrowding and ensure a safe experience.
Provides tools for check-in and tracking attendance in real-time."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Save Time & Money"
                  description="In today’s fast-paced world, efficiency is key to successful event planning. Our event management system is designed to help you save both time and money, allowing you to focus on what truly matters—creating memorable experiences for your attendees."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
