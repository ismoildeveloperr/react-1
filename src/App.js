// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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

///ismoil ismoil
const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                    </ Routes>
                </div>
                {/*<Profile />*/}
            </div>
        </BrowserRouter>
    );
};

export default App;
 