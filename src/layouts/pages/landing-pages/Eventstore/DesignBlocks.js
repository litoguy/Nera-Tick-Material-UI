import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import data from "pages/Presentation/sections/data/designBlocksData";

const API_URL = "http://127.0.0.1:8000/api"; // Replace with your actual API URL

const DesignBlocks = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await axios.get(`${API_URL}/tickets`);
        setTickets(data.data); // Set the tickets in state
      } catch (err) {
        setError("Failed to fetch tickets"); // Handle error
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchTickets(); // Call the fetch function
  }, []);

  const renderStaticData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                <ExampleCard image={image} name={name} count={count} pro={pro} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  const renderDynamicTickets = () => (
    <Grid container spacing={3} sx={{ mb: 10 }}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            Tickets
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            Dynamically fetched tickets
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {tickets.map((ticket) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={ticket.uuid}>
              <Link to={`/ticket/${ticket.id}`}>
                <ExampleCard
                  image="" // You can assign an image URL based on ticket data if available
                  name={ticket.title}
                  count={ticket.count || 10}
                  pro={ticket.pro || false}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Infinite Tickets Available"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Huge collection of Events
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We have worked with multiple Organizers to put together and customise their ticketing
            experience perfect Testimonials.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>
        {renderStaticData}
        {loading ? <p>Loading tickets...</p> : renderDynamicTickets()}
        {error && <p>{error}</p>}
      </Container>
    </MKBox>
  );
};

export default DesignBlocks;
