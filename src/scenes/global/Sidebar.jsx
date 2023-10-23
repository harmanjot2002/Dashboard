import { useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { deepPurple } from "@mui/material/colors";

const Item = ({ title, to, icon, selected, setSelected, handleClick }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => {
                setSelected(title);
                if (handleClick) handleClick();
            }}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("token"));
    useEffect(() => {
        switch (pathname) {
            case "/dashboard":
                setSelected("Dashboard");
                break;
            case "/team":
                setSelected("Manage Team");
                break;
            case "/form":
                setSelected("Create User");
                break;
            case "/lectures":
                setSelected("Lectures Information");
                break;
            default:
                setSelected("Dashboard");
        }
    }, [pathname]);

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "25px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon className="hidden"  /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                        className="hidden md:block"
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography
                                    variant="h3"
                                    color={colors.grey[100]}
                                >
                                    EduCrafter
                                </Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <MenuOutlinedIcon className="hidden" />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USER */}
                    {!isCollapsed && (
                        <Box mt="35px">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {/* <img
                                    alt="profile-user"
                                    src={token?.image}
                                    className="h-20 w-20 rounded-full"
                                /> */}
                                {token?.image === "" ? (
                                    <Avatar
                                        sx={{
                                            bgcolor: deepPurple[500],
                                            height: 80,
                                            width: 80,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        {token?.name.slice(0, 1)}
                                    </Avatar>
                                ) : (
                                    <img
                                        className="h-20 w-20 rounded-full"
                                        src={token?.image}
                                        alt="profile"
                                    />
                                )}
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "12px 0 0 0" }}
                                >
                                    {token?.name}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU ITEMS */}
                    <Box
                        paddingLeft={isCollapsed ? undefined : "10%"}
                        mt="30px"
                    >
                        <Item
                            title="Dashboard"
                            to="/dashboard"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Lectures Information"
                            to="/lectures"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Logout"
                            icon={<LogoutIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            handleClick={() => {
                                localStorage.removeItem("token");
                                navigate("/login");
                            }}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
