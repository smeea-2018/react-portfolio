import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const name = "Smeea";
// const navLink = [
//   {
//     label: "About Me",
//     href: "/aboutMe",
//   },
//   { label: "portfolio", href: "#" },
//   { label: "contact", href: "#" },
// ];

//  export const App = () => {

//   return (
//      <div>
//        <Nav type={name} />
//      </div>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//          >
//             Learn React
//           </a>
//         </header>
//       </div>
//   );
//  };

function App() {
  return (
    <BrowserRouter>
      <NavBar
        navItems={[
          {
            label: "About Me",
            href: "/aboutme",
          },
          {
            label: "Portfolio",
            href: "/Portfolio",
          },
          {
            label: "Contact Me",
            href: "/contactme",
          },
          { label: "Resume", href: "/resume" },
        ]}
      />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
