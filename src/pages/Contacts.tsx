import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";

type Props = {};

export const Contacts = (props: Props) => {
  const [currentContact, setCurrentContact] = useState(0);

  const contacts = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      image: "https://via.placeholder.com/150",
    },
  ];

  const handlePrev = () => {
    setCurrentContact((currentContact - 1 + contacts.length) % contacts.length);
  };

  const handleNext = () => {
    setCurrentContact((currentContact + 1) % contacts.length);
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Contacts
        </Typography>
        <Box mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box mb={2}>
                  <img
                    src={contacts[currentContact].image}
                    alt={contacts[currentContact].name}
                    width={150}
                    height={150}
                  />
                </Box>
                <Typography variant="body1" gutterBottom>
                  {contacts[currentContact].name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {contacts[currentContact].email}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box mb={2}>
                  <img
                    src={contacts[(currentContact + 1) % contacts.length].image}
                    alt={contacts[(currentContact + 1) % contacts.length].name}
                    width={150}
                    height={150}
                  />
                </Box>
                <Typography variant="body1" gutterBottom>
                  {contacts[(currentContact + 1) % contacts.length].name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {contacts[(currentContact + 1) % contacts.length].email}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            color="primary"
            onClick={handlePrev}
            disabled={currentContact === 0}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={currentContact === contacts.length - 1}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
