import { useState } from "react";
import axios from "axios";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";
// Material Kit 2 React page layout routes
import routes from "routes";

// Material Kit 2 React components
import MKAlert from "components/MKAlert";

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Fix here

  const navigate = useNavigate(); // Hook for navigation

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the login API
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login", {
        email,
        password,
      });

      // Save the token in sessionStorage
      sessionStorage.setItem("token", response.data.token);

      // Redirect or update UI
      console.log("Login successful:", response.data);
      alert("Login successful"); // Updated alert
      navigate("/admin/events"); // Redirect to dashboard
    } catch (err) {
      // Handle error
      console.error("Login failed:", err);
      setError(err.response ? err.response.data.message : "Login failed"); // Updated error handling
    }
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "#",
          label: "",
          color: "",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url("https://media.istockphoto.com/id/1341411438/photo/a-group-of-african-american-friends-having-fun-at-the-street-restaurant-summer-party.jpg?s=612x612&w=0&k=20&c=bOlSjJ_ML5tl4_jgoOORGu9XCjsfzSnS4l14bD8V7ig=")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                {/* Display error message */}
                {error && (
                  <MKAlert color="error" dismissible>
                    {error}!!
                  </MKAlert>
                )}
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <form onSubmit={handleSubmit}>
                  <MKBox component="form" role="form" type="submit">
                    <MKBox mb={2}>
                      <MKInput
                        type="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                      />
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                      />
                    </MKBox>
                    <MKBox display="flex" alignItems="center" ml={-1}>
                      <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                      <MKTypography
                        variant="button"
                        fontWeight="regular"
                        color="text"
                        onClick={handleSetRememberMe}
                        sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                      >
                        &nbsp;&nbsp;Remember me
                      </MKTypography>
                    </MKBox>
                    <MKBox mt={4} mb={1}>
                      <MKButton
                        variant="gradient"
                        color="info"
                        type="submit"
                        fullWidth
                        onClick={handleSubmit}
                      >
                        Sign In
                      </MKButton>
                    </MKBox>
                    <MKBox mt={3} mb={1} textAlign="center">
                      <MKTypography variant="button" color="text">
                        Don&apos;t have an account?{" "}
                        <MKTypography
                          component={Link}
                          to="/auth/sign-up"
                          variant="button"
                          color="info"
                          fontWeight="medium"
                          textGradient
                        >
                          Sign up
                        </MKTypography>
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </form>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
