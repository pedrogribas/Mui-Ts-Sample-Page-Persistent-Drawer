import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {};

export const Home = (props: Props) => {
  let navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.common.white,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "center",
                "& h1": {
                  fontWeight: 700,
                  fontSize: "4rem",
                  marginBottom: (theme) => theme.spacing(2),
                },
                "& p": {
                  fontSize: "1.25rem",
                  marginBottom: (theme) => theme.spacing(4),
                },
                "& button": {
                  padding: (theme) => theme.spacing(1.5, 4),
                  fontSize: "1.125rem",
                },
              }}
            >
              <Typography variant="h1" component="h1" gutterBottom>
                Welcome to Our Site!
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                id felis et ipsum bibendum ultrices.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/about")}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                "& img": {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                },
              }}
            >
              <img src="https://via.placeholder.com/500x300" alt="Hero Image" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
