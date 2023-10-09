import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Form from "./scenes/form";
// import Contacts from "./scenes/contacts";

import { mockDataTeam } from "./data/mockData";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Login from "./scenes/login";
import TeacherProfile from "./scenes/teacher";
import CreateUser from './scenes/createUser'
import Lectures from "./scenes/lectures";

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const { pathname } = useLocation(); 

    const token = localStorage.getItem("token");
    const team = JSON.parse(localStorage.getItem("team"));
    if(team === null || team === undefined || team.length === 0){
        localStorage.setItem("team", JSON.stringify(mockDataTeam));
        console.log("team ki length zero hogyi hai");
    }

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {!token ? (
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
                ) : (
                    <div className="app">
                        <Sidebar isSidebar={isSidebar} />
                        <main className="content max-w-screen overflow-scroll scrollHidden">
                            <Topbar />
                            <Routes>
                                <Route path="/" element={<Navigate to="/dashboard" />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/team" element={<Team />} />
                                <Route path="/form" element={<Form />} />
                                <Route path="/lectures" element={<Lectures />} />
                                <Route path="/teacher/:id" element={<TeacherProfile />} />
                                <Route path="/createUser" element={<CreateUser />} />
                            </Routes>
                        </main>
                    </div>
                )}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
