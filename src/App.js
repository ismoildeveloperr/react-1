// import logo from "./logo.svg";
import "./App.css";
import "./App_style_list.css";
import Footer from "./Footer";
import Header from "./Header";
import Technologies from "./Technologies";
// import Footer from "./Footer";
// import Technologies from "./Technologies";
// import Header from "./Header";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           ismoil <code   >src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <div class="block">
      <Header />
      <Technologies />
      <Footer />
    </div>
  );
};

export default App;
