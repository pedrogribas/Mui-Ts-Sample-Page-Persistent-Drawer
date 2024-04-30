import { Box, Container, Grid, Typography } from "@mui/material";

type Props = {};

export const About = (props: Props) => {
  return (
    <Box
      sx={{
        padding: 8,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            marginBottom: 8,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: "3rem",
              marginBottom: 2,
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.25rem",
              marginBottom: 4,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            felis et ipsum bibendum ultrices. Sed congue, magna quis pharetra
            rhoncus, mi lacus venenatis nisl, vel aliquet nunc nisi et sapien.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 4,
            }}
          >
            <img
              src="https://via.placeholder.com/500x300"
              alt="About Us"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: 12,
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.25rem",
              marginBottom: 4,
            }}
          >
            Nullam id felis et ipsum bibendum ultrices. Sed congue, magna quis
            pharetra rhoncus, mi lacus venenatis nisl, vel aliquet nunc nisi et
            sapien. Sed bibendum consequat nisl ac semper.
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: 8,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: "3rem",
              marginBottom: 2,
            }}
          >
            Our Team
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="https://via.placeholder.com/200x200"
                  alt="Team Member 1"
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    height: "auto",
                    borderRadius: 12,
                  }}
                />
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    marginTop: 2,
                    marginBottom: 1,
                  }}
                >
                  John Doe
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: 4,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="https://via.placeholder.com/200x200"
                  alt="Team Member 2"
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    height: "auto",
                    borderRadius: 12,
                  }}
                />
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    marginTop: 2,
                    marginBottom: 1,
                  }}
                >
                  Jane Doe
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: 4,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
