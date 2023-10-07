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
                        <main className="content">
                            <Topbar />
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/team" element={<Team />} />
                                {/* <Route path="/contacts" element={<Contacts />} /> */}
                                <Route path="/form" element={<Form />} />
                            </Routes>
                        </main>
                    </div>
                )}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
