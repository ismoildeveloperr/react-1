import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Nav />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs поп/>} />
                        <Route path="/dialogs/:id" element={<Dialogs />} /> {/* ВАЖНО: добавили это */}
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
