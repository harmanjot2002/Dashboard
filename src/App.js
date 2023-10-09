import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Form from "./scenes/form";
// import Contacts from "./scenes/contacts";

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
    console.log({ pathname });

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {pathname === "/login" ? (
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                ) : (
                    <div className="app">
                        <Sidebar isSidebar={isSidebar} />
                        <main className="content max-w-screen overflow-scroll scrollHidden">
                            <Topbar />
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
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
