import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
export const AboutMe = () => {
  return (
    <div>
      <Paper
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          p: 3,
          m: 8,
        }}
      >
        <h1>About Me</h1>

        <Stack spacing={2}>
          <item>
            <Avatar
              alt="profile pic"
              src="../images/weatherdashboard.JPG"
              sx={{ width: 100, height: 100, alignItems: "center" }}
            />
          </item>
          <item>
            Full stack web developer, attended Birmingham University boot camp,
            developed new skills in javaScript, CSS,React ,MySQL/MongoDB.
            Focused on developing mobile-first web applications involving front
            and backend.
          </item>
        </Stack>
      </Paper>
    </div>
  );
};
