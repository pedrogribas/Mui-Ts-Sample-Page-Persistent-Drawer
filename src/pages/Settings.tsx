import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {};

export const Settings = (props: Props) => {
  const [name, setName] = useState("John Doe");

  const handleSave = () => {
    // Save the settings to the backend or local storage
    console.log("Name saved:", name);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      <Card>
        <CardHeader title="Settings" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              <Box mb={2}>
                <Typography variant="body1">Name:</Typography>
                <TextField
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box>
                <Typography variant="body1">Email:</Typography>
                <Typography variant="body2" color="textSecondary">
                  john.doe@example.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Security
              </Typography>
              <Box mb={2}>
                <Typography variant="body1">Password:</Typography>
                <Typography variant="body2" color="textSecondary">
                  ************
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">
                  Two-Factor Authentication:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Disabled
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
