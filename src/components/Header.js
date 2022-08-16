// import React from "react";

// import AppBar from "@mui/material/AppBar";

// export const Nav = (props) => {
//   console.log(props);

//   const navLinkArray = [
//     {
//       label: "About Me",
//       to: "#",
//     },
//     { label: "portfolio", href: "#" },
//     { label: "contact", href: "#" },
//   ];

//   // return (
//   //   <div className>
//   //     <div>
//   //       <nav className="nav-bar">
//   //         <div>{props.type}</div>
//   //         <ul>
//   //           <li>
//   //             <a href="#">About Me</a>
//   //           </li>
//   //           <li>
//   //             <a href="#">Portfolio</a>
//   //           </li>
//   //           <li>
//   //             <a href="#">contact</a>
//   //           </li>
//   //         </ul>
//   //       </nav>
//   //     </div>
//   //   </div>
//   // );

//   const drawerWidth = 240;
//   const navItems = ["Home", "About", "Contact"];

//   // export default function DrawerAppBar(props: Props) {
//   //   const { window } = props;
//   //   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             MUI
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: "#fff" }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// };
