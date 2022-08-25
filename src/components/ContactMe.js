import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { flexbox } from "@mui/system";
import "../App.css";

export default function Message() {
  return (
    <div className="flex-class">
      <div className="flex-item">
        <h1>ContactMe</h1>
        {/* <FormControl sx={{ width: "25ch" }}> */}
      </div>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField required id="outlined-required" label="Name" />
          </div>
          <div class="form-control">
            <input
              id="my-input"
              placeholder="Email address"
              aria-describedby="my-helper-text"
            />
          </div>
          <TextField
            id="outlined-textarea"
            label="Message"
            placeholder="Placeholder"
            multiline
          />
        </Box>
        {/* </FormControl> */}
      </div>
    </div>
  );
}
