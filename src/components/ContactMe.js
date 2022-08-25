import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { flexbox } from "@mui/system";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import "../App.css";
import Stack from "@mui/material/Stack";

export default function Message() {
  return (
    <div>
      <Paper
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
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
          </Stack>
        </stack>
      </Paper>
    </div>
  );
}
