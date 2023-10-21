import { Box, IconButton, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Delete from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import Header from "../../components/Header";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";

const Team = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isDelOpen, setIsDelOpen] = useState(false);
    const [delId, setDelId] = useState(null);
    const [delEmail, setDelEmail] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClose = () => setIsDelOpen(false);
    const handleOpen = (e) => {
        setIsDelOpen(true);
        setDelId(e.id);
        setDelEmail(e.email);
    };
    const columns = [
        { field: "id", headerName: "ID", width: 60,minWidth:120 },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
            width: 60,
            minWidth:120
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
            width: 60,
            minWidth:120
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
            width: 60,
            minWidth:120
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            width: 60,
            minWidth:120
        },
        {
            flex: 1,
            width: 60,
            minWidth:120,
            renderCell: (val) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="space-around"
                        borderRadius="4px"
                    >
                        <IconButton
                            onClick={() => {
                                navigate("/update/teacher/" + val.id, { state: val.row });
                            }}
                        >
                            <ModeIcon />
                        </IconButton>
                        <IconButton onClick={() => handleOpen(val)}>
                            <Delete />
                        </IconButton>
                    </Box>
                );
            },
        },
    ];

    const mockData = JSON.parse(localStorage.getItem("team"));
    return (
        <Box m="20px" width="80%" margin="auto">
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <Box
                m="40px 0 0 0"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockData.reverse()}
                    columns={columns}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 10 } },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    onCellClick={(e) => {
                        if (e.field === "name") {
                            navigate("/update/teacher/" + e.id, { state: e.row });
                        }
                    }}
                />
            </Box>
            <DeleteModal
                delId={delId}
                open={isDelOpen}
                handleClose={handleClose}
                delEmail={delEmail}
            />
        </Box>
    );
};

export default Team;
