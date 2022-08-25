import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
export const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      {/* <div sx={{ display: "flex" }}> */}
      <Stack spacing={2}>
        <item>
          <Avatar
            alt="profile pic"
            src="../images/weatherdashboard.JPG"
            sx={{ width: 50, height: 50 }}
          />
        </item>
        <item></item>
      </Stack>
    </div>
    // </div>
  );
};
