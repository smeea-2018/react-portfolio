import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import "../App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";

export default function Message() {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <div>
      <Paper
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            minWidth: isMobile ? "100%" : "40ch",
          },
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          m: 8,
        }}
      >
        <Typography component="h1" variant="h4" align="center">
          Contact Me
        </Typography>
        <Divider />
        <stack
          component="form"
          sx={{
            p: 5,
            m: 8,
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}

          // onSubmit={handleSubmit(onSubmit)}
        >
          <Stack spacing={2}>
            <TextField
              required
              label="Name"
              variant="outlined"
              error
              helperText="Please enter your first name."
            />

            <TextField
              required
              label="Email"
              variant="outlined"
              helperText="Please enter your email address."
            />

            <TextField
              required
              label="Message"
              variant="outlined"
              helperText="Please enter message"
            />
            <Button
              variant="contained"
              type="Submit"
              sx={{ backgroundColor: "blue" }}
            >
              Send
            </Button>
          </Stack>
        </stack>
      </Paper>
    </div>
  );
}
